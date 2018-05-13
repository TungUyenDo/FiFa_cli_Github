import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

declare var $: any;

import { ApiServices } from '../app.services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private apiService:ApiServices) { }
  ngOnInit() {
    console.log('init')

      this.apiService.getNews().subscribe(res => {
          console.log(res)
      })


      

      let slider = (<any>$)("#owl-demo").slick({
        slidesToShow: 3,
        dots: true,
        infinite: false,
        centerMode: true,
        arrows:true,
        prevArrow:$('.wc_slick_prev'),
        nextArrow:$('.wc_slick_next'),


      });
  }
}
