import { ApiServices } from './../app.services';
import { Component, OnInit } from '@angular/core';
import 'owl.carousel';
declare var $: any;

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {


  //data get news
  get_news: any = {
    limit: 10,
    page: 1
  }
  data_news: any;
  data_news_link_string: any;
  page_index: any;

  index = 1
  array_news: any;

  end_page: any

  constructor(private apiServices: ApiServices) { }

  ngOnInit() {
    this.array_news = [];
    this.GetNews(this.array_news);


  }

  clickNextNewsPage() {
    //number page ++
    this.index++;

    this.get_news.page = this.index;

    this.GetNews(this.array_news);

    

  }
  slider_destination(){
    $('.owl_destination').owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      navText: [$('.destination_navigate_left'), $('.destination_navigate_right')]
    });
  }
    
  

  GetNews(arr) {
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
      console.log(this.data_news_link_string)

      setTimeout(() => {
        this.slider_destination()
      }, 0);
      

    })
  }


}
