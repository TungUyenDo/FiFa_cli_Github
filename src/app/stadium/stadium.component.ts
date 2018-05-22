import { ApiServices } from './../app.services';
import { Component, OnInit } from '@angular/core';
import 'owl.carousel';
declare var $: any;

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss']
})
export class StadiumComponent implements OnInit {

  data_stadium: any;
  litst_stadium: any;
  
  constructor(private apiServices: ApiServices) { }

  ngOnInit() {

    this.GetStadium();

  }

  slider_destination(){
    $('.owl_destination').owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      navText: [$('.destination_navigate_left'), $('.destination_navigate_right')]
    });
  }
    
  

  GetStadium() {
    this.apiServices.getStadium().subscribe(res => {
      this.data_stadium = res;
      console.log(res)

      this.data_stadium = this.data_stadium.data.items

      setTimeout(() => {
        this.slider_destination()
      }, 0);
      

    })
  }


}
