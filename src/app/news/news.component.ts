import { Component, OnInit } from '@angular/core';

import { ApiServices } from "../app.services";

declare var $: any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  //data get news
  get_news: any = {
    limit: 10,
    page: 1
  }
  data_news: any;
  data_news_link_string: any;
  page_index: any;

  index  = 1
  array_news:any;

  end_page :any;

  link : any

  constructor(private apiServices: ApiServices) {}

  ngOnInit() {
    this.array_news = [];
    this.GetNews(this.array_news);


    // $(window).click(function () {
    //   $(".popup_modal").removeClass('in');
    //   $('body').css('overflow', 'auto')
    // })
  }

  clickNextNewsPage(){
      //number page ++
      this.index ++;

      this.get_news.page  = this.index;

      this.GetNews(this.array_news);

  }


  GetNews(arr){
      this.data_news_link_string = arr;
      this.apiServices.getNews(this.get_news).subscribe(res => {
          this.data_news = res;

          this.end_page = this.data_news.data.paginator.total_pages;

          // foreach and push element to array
          this.data_news.data.items.forEach(ele => {
                this.data_news_link_string.push(ele);

                // foreach and add https for images
                ele.img_url = 'https://' + ele.img_url;
          })


          this.array_news = this.data_news_link_string;
          // console.log(this.data_news_link_string)

      })
  }

  click_open_link(link,e){
    // e.stopPropagation();

    this.link = link;
    $(".popup_modal").addClass('in');
    $('body').css('overflow','hidden')
  }


  close_popup(){
    $(".popup_modal").removeClass('in');
    $('body').css('overflow', 'auto')
  }

  
  
}
