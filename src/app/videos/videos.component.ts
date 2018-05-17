import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ApiServices } from "../app.services";

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

  constructor(private apiServices: ApiServices) { }

  ngOnInit() {
    this.GetVideos();

  }

  GetVideos() {
    this.wrong_link = []
    console.log('news main page')
    this.apiServices.getVideos(this.get_videos).subscribe(res => {
      this.list_data_video = res;

      this.data_video = this.list_data_video.data.items;

      this.data_video.forEach(ele => {
          ele.image = ele.image.split('http://img.fifa.com/image/upload/t_l5/');

          if(ele.image[1] == '.jpg'){
              ele.image[1] = 'image_wrong.jpeg'
          }

        ele.image = environment.imgForWrongLink;


          return ele
      })

      console.log(this.data_video)

      //splice item from array data.video
      this.video_4Item = this.data_video.splice(0, 4) //4 video first
      this.video_6Item = this.data_video//6 video next




    })
  }

}
