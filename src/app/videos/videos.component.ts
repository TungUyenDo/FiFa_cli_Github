import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ApiServices } from "../app.services";

declare var $: any;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  //data get news
  get_videos: any = {
    limit: 10,
    page: 1
  }
  list_data_video: any;
  data_video: any;
  video_4Item : any;
  video_6Item : any;
  wrong_link : any  
  index = 1;
  end_page : any;

  array_news : any

  constructor(private apiServices: ApiServices) { }

  ngOnInit() {
    this.array_news = []

    this.GetVideos(this.array_news);
    
  }

  click_moreVideos(){
    this.index ++;

    this.get_videos.page = this.index;
    this.GetVideos(this.array_news);
  }

  clickNextVideosPage(){
      this.index ++;

      this.get_videos.page = this.index;
      this.GetVideos(this.array_news);

  }

  GetVideos(arr) {
    this.wrong_link = [];

    this.data_video = arr;

    this.apiServices.getVideos(this.get_videos).subscribe(res => {
      this.list_data_video = res;

      this.list_data_video.data.items.forEach(element => {
          this.data_video.push(element);
      });

      this.array_news = this.data_video;

      // check when to end page
      this.end_page = this.list_data_video.data.paginator.total_pages;

      //if data wrong url image -> use url default
      this.data_video.forEach(ele => {

          if(ele.image == 'http://img.fifa.com/image/upload/t_l5/.jpg'){
              ele.image = environment.imgForWrongLink;
          }

          ele.image_full = ele.image.replace('http://img.fifa.com/image/upload/t_l5/', 'http://img.fifa.com/image/upload/t_l3/')


          ele.link = "https://www.youtube.com/embed/" + ele.link

      })


      if(this.index == 1){
          //splice item from array data.video
          this.video_4Item = this.data_video.splice(0, 4) //4 video first
          this.video_6Item = this.data_video//6 video next
      }else{
          this.video_4Item = this.data_video

          this.video_6Item = null
      }

      this.array_news = this.data_video;
      // console.log(this.data_video)

    })
  }

  video_link :any
  video_images_full :any
  video_description :any

  click_open_link_video(link, images_full, des, e) {
    // e.stopPropagation();

    this.video_link = link;
    this.video_images_full = images_full;
    this.video_description = des

    $(".popup_modal.video").addClass('in');
    $('body').css('overflow', 'hidden')
  }


  close_popup() {
    $(".popup_modal").removeClass('in');
    $('body').css('overflow', 'auto')
  }

}


// <iframe width="560" height = "315" src = "https://www.youtube.com/embed/pcD1zSInt9A" frameborder = "0" allow = "autoplay; encrypted-media" allowfullscreen > </iframe>