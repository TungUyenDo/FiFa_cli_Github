import { Component, OnInit } from '@angular/core';

import {OwlCarousel} from 'ngx-owl-carousel';
import { ApiServices } from "../services/api.services";

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
   

     
  } 

}
