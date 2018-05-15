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

  data_news: any;
  data_news_link_string: any;

  //data get news
  get_news: any = {
    limit: 10,
    page: 1
  }
  
  constructor(private apiServices:ApiServices) { }
  ngOnInit() {
    console.log('init')
    this.apiServices.getDemo().subscribe(res =>{
        console.log(res)
    })
    // this.apiServices.getNews(this.get_news).subscribe(res => {
    //   this.data_news = res;

    //   this.data_news_link_string = this.data_news.data.items;
    //   console.log(this.data_news_link_string);

    //   this.data_news_link_string.forEach(element => {

    //     element.img_url = 'https://' + element.img_url;
    //     // console.log(element);
    //     return element;
    //   });

    // })
    $(document).ready(function () {
        //slider news
        (<any>$)("#top-slick").slick({
          slidesToShow: 1,
          dots: true,
          infinite: false,
          arrows: true,
          autoplay: false,
          draggable:true,
          slidesToScroll: 1,
          variableWidth: false,
          prevArrow: $('.top-slick_prev'),
          nextArrow: $('.top-slick_next'),
        })

    })
      
      
      //slider news
      let slider_news = (<any>$)("#slick-news").slick({
        slidesToShow: 3,
        dots: true,
        infinite: false,
        arrows:true,
        draggable: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
        prevArrow: $('.slick-news_prev'),
        nextArrow: $('.slick-news_next'),
      });


      // //slider groups
      let slider_groups = (<any>$)(".slider-groups").slick({
        slidesToShow: 4,
        infinite: false,
        arrows:true,
        dots:false,
        rows:2,
        margin:'10px',
        slidesPerRow: 1,
        draggable: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 8,
              rows: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              rows:1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              rows:1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
        prevArrow:$('.slider-groups_prev'),
        nextArrow:$('.slider-groups_next'),
      });

      
  }
}