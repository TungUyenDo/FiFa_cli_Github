import { element } from 'protractor';
import { ApiServices } from './../app.services';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  data_knockout : any;
  list_data_knockout : any;

  round16 : any 
  quarters_finals : any 
  semi_finals : any 
  play_off : any
  final : any;
  hhmm: any
  list_starting_at:any

  constructor( private apiServices : ApiServices) { }

  ngOnInit() {  

      this.GetScheduleKnockout()
  }

  GetScheduleKnockout(){

    this.round16 =[]
    this.quarters_finals=[]
    this.semi_finals =[]
    this.play_off =[]
    this.final =[]

    this.apiServices.getScheduleKnockout().subscribe(res => {
          this.data_knockout = res;
          this.list_starting_at = []
          this.data_knockout.data.items.forEach(element => {
            // element.starting_at = new Date(element.starting_at * 1000);
            element.starting_at = moment.unix(element.starting_at).format("D MMM YYYY - HH:mm");
             

            element.starting_at =  element.starting_at.split('- ')
            console.log(element);

            if(element.type == 1){
                this.round16.push(element)
            }
            else if(element.type == 2){
                this.quarters_finals.push(element)
            }
            else if(element.type == 3){
                this.semi_finals.push(element)
            }
            else if(element.type == 4){
                this.play_off.push(element)
            }
            else{
                this.final.push(element)
            }

          });

          this.list_data_knockout = this.data_knockout.data.items;

          console.log(this.list_data_knockout)


          //splice item
          // this.round16 = this.list_data_knockout.splice(0,8);
          
          // this.quarters_finals = this.list_data_knockout.splice(0,4)

          // this.semi_finals = this.list_data_knockout.splice(0,2)

          // this.play_off = this.list_data_knockout.splice(0,1)

          // this.final = this.list_data_knockout.splice(0,1)

          console.log(this.round16)
          console.log(this.quarters_finals)
          console.log(this.semi_finals)
          console.log(this.play_off)
          console.log(this.final)

    })
  }

  round8_1:any
  round8_2:any
  quarters_finals_1:any
  quarters_finals_2:any
  semi_finals_1:any
  semi_finals_2:any

  click_openbracketview(){
      this.round8_1 = this.round16.splice(0,4)
      this.round8_2 = this.round16

      this.quarters_finals_1 = this.quarters_finals.splice(0,2)
      this.quarters_finals_2 = this.quarters_finals

      this.semi_finals_1 = this.semi_finals.splice(0,1)
      this.semi_finals_1 = this.semi_finals

      console.log('round 1',this.round8_1)
      console.log('round 2',this.round8_2)
  }


}
