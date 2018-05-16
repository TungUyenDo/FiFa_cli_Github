import { Component, OnInit } from '@angular/core';

// import {OwlCarousel} from 'ngx-owl-carousel';
import { ApiServices } from "../app.services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data_news :any;
  data_news_link_string :any;

  //data get news
  get_news: any = {
    limit: 10,
    page: 1
  }

  carouselNewsOptions:any;
  carouselTopOptions:any;

  constructor(private apiServices: ApiServices) { 
      
  }

  ngOnInit(){
      console.log('cli init')
      this.apiServices.getNews(this.get_news).subscribe(res => {
        this.data_news = res;

        this.data_news_link_string = this.data_news.data.items;
        console.log(this.data_news_link_string);

        this.data_news_link_string.forEach(element => {
           
            element.img_url = 'https://' + element.img_url; 
            // console.log(element);
            return element;
        });

      })
   
      this.carouselNewsOptions = {
        nav : true, 
        dots: false, 
        loop:false, 
        items:5, 
        margin:10,
        responsive: {       
          0: {  items: 1, margin: 5 },
          480: {  items: 2, margin: 5 },
			    768: { items: 3, margin: 5, centerMode:true },
			    1024: { items: 4, margin: 5 }
        },  
        navText:["<i class='fa fa-chevron-circle-left' aria-hidden='true'>Next</i>","<i class='fa fa-chevron-circle-right' aria-hidden='true'>Prev</i>"],
      }

      this.carouselTopOptions = {
        nav : true, 
        dots: true, 
        loop:false, 
        items:1,         
        navText:["<i class='fa fa-chevron-circle-left' aria-hidden='true'>Next</i>","<i class='fa fa-chevron-circle-right' aria-hidden='true'>Prev</i>"],
      }
     
  } 

}
