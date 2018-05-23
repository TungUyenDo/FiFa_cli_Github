import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { ApiServices } from "../app.services";

import {environment} from '../../environments/environment'

declare var $: any;


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data_news :any;
  data_news_link_string :any;
  data_video :any;
  data_video_link_string :any;
  data_photos :any;
  list_data_photos :any;
  data_top_carousel :any;
  list_data_top_carousel :any;

  //data get news
  get_news: any = {
    limit: 10,
    page: 1
  }
  get_video: any = {
    limit: 10,
    page: 1
  }
  get_photos: any = {
    limit: 10,
    page: 1
  }

  carouselTopPage:any;
  carouselNewsOptions:any;
  carouselForCusOptions:any;
  carouselVideosOptions:any;
  carouselTimelineOptions:any;

  link : any

  constructor(private apiServices: ApiServices) { 
      
  }

  ngOnInit(){

      this.GetNews();

      this.GetPhotos()
      
      this.GetVideos();
      
      this.GetTopCarousel();

      // $(window).click(function () {
      //   $(".popup_modal.news").removeClass('in');
      //   $(".popup_modal.video").removeClass('in');
      //   $('body').css('overflow', 'auto')
      // })
   
      //carousel News
      this.carouselNewsOptions = {
        nav : true, 
        dots: true, 
        loop:false, 
        items:5, 
        margin:10,
        responsive: {       
          0: {  items: 1, margin: 5 },
          480: {  items: 2, margin: 5 },
			    768: { items: 3, margin: 5, centerMode:true },
			    1024: { items: 4, margin: 5 }
        },  
        navText: [$('.fi__nav--news-next'), $('.fi__nav--news-prev')]
      }

      //carousel timeline
      this.carouselTimelineOptions = {
        nav : true, 
        dots: true, 
        loop:false, 
        items:5, 
        margin:10,
        responsive: {       
          0: {  items: 1, margin: 5 },
          480: {  items: 2, margin: 5 },
			    768: { items: 3, margin: 5, centerMode:true },
			    1024: { items: 4, margin: 5 }
        },  
        navText: [$('.fi__nav--timeline-next'), $('.fi__nav--timeline-prev')]
      }

       //carousel forcus
      this.carouselForCusOptions = {
          nav : true, 
          dots: true, 
          loop:false, 
          items:5, 
          margin:10,
          responsive: {       
            0: {  items: 1, margin: 5 },
            480: {  items: 2, margin: 5 },
            768: { items: 3, margin: 5, centerMode:true },
            1024: { items: 4, margin: 5 }
          },  
          navText: [$('.fi__nav--forcus-next'), $('.fi__nav--forcus-prev')]
      }

       //carousel video
      this.carouselVideosOptions = {
          nav : true, 
          dots: true, 
          loop:false, 
          items:5, 
          margin:10,
          responsive: {       
            0: {  items: 1, margin: 5 },
            480: {  items: 2, margin: 5 },
            768: { items: 3, margin: 5, centerMode:true },
            1024: { items: 4, margin: 5 }
          },  
          navText: [$('.fi__nav--forcus-next'), $('.fi__nav--forcus-prev')]
      }


       //carousel Top
      this.carouselTopPage = {
          nav : true, 
          dots: true, 
          loop:false, 
          items:1, 
          navText: [$('.fi__nav--Top-next'), $('.fi__nav--Top-prev')]
      }

  
  } 

  GetTopCarousel(){
    this.apiServices.getDataTopCarousel().subscribe(res =>{
      // console.log('data json')
      this.data_top_carousel = res;

      this.list_data_top_carousel = this.data_top_carousel.topCarousel;

    })
  }

  GetNews(){
    this.apiServices.getNews(this.get_news).subscribe(res => {
      this.data_news = res;
  
      this.data_news_link_string = this.data_news.data.items;
      // console.log(this.data_news_link_string);
  
      this.data_news_link_string.forEach(element => {
         
          element.img_url = 'https://' + element.img_url; 
          // console.log(element);
          return element;
      });
  
    })
  }
  GetVideos(){
    this.apiServices.getVideos(this.get_video).subscribe(res => {
      this.data_video = res;
  
      this.data_video_link_string = this.data_video.data.items;
      
  
      this.data_video_link_string.forEach(element => {
         
          // element.image = element.image.split('http://img.fifa.com/image/upload/t_l5') 

          if(element.image == 'http://img.fifa.com/image/upload/t_l5/.jpg'){
             element.image = environment.imgForWrongLink;
          }

          element.link = "https://www.youtube.com/embed/" + element.link
          return element;
      });
      console.log(this.data_video_link_string);
    })
  }
  
  GetPhotos() {
    this.apiServices.getPhotos(this.get_photos).subscribe(res => {
      this.data_photos = res;

      this.list_data_photos = this.data_photos.data.items;

      // console.log(this.list_data_photos)

    })
  }

  click_open_link(link, e) {
    // e.stopPropagation();

    this.link = link;
    $(".popup_modal.news").addClass('in');
    $('body').css('overflow', 'hidden')
  }


  click_open_link_video(link, e) {
    // e.stopPropagation();

    this.link = link;
    $(".popup_modal.video").addClass('in');
    $('body').css('overflow', 'hidden')
  }


  close_popup() {
    $(".popup_modal").removeClass('in');
    $('body').css('overflow', 'auto')
  }


}
