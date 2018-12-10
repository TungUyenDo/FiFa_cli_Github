import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../app.services';

@Component({
  selector: 'app-list-matches',
  templateUrl: './list-matches.component.html',
  styleUrls: ['./list-matches.component.scss', '../livecores.component.scss']
})
export class ListMatchesComponent implements OnInit {
  // data_livecores: any;
  res_livecores: any;
  time : any = 1;
  interval : any;
  data_livecores:any;

  constructor(private apiservice: ApiServices, private router: Router) { }

  ngOnInit() {
    this.interval = setInterval(() =>{
      console.log('list')
      this.GetLiveCores()
    },3000)
    
    // this.GetLiveCores()
      

  }

  GetLiveCores() {

    this.apiservice.getLiveCores().subscribe(res => {
      this.res_livecores = res;

      this.data_livecores = this.res_livecores.data;

      console.log(this.data_livecores)
    })
  }

  click_toDetailMatch(id){
    console.log(id)
    this.router.navigate(['/livecores/detail/' + id] )  
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);

    }
  }
  

}
