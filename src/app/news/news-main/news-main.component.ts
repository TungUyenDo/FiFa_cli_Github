import { Component, OnInit } from '@angular/core';

import { ApiServices } from "../../app.services";


@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss']
})
export class NewsMainComponent implements OnInit {


  //data get news
  get_news: any = {
    limit: 10,
    page: 1
  }
  data_news: any;
  data_news_link_string: any;


  constructor(private apiServices: ApiServices) {}

  ngOnInit() {
    this.GetVideos();


  }

  GetVideos(){
      console.log('news main page')
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
