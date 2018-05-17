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

  constructor(private apiServices: ApiServices) { }

  ngOnInit() {
    this.GetVideos();

  }

  GetVideos() {
    console.log('news main page')
    this.apiServices.getVideos(this.get_videos).subscribe(res => {
      this.list_data_video = res;

      console.log(this.list_data_video.data.items)

      this.data_video = this.list_data_video.data.items

      this.video_4Item = this.data_video.splice(0,4) //4 video first
      this.video_6Item = this.data_video//6 video next
      // console.log(this.video_4Item)
      // console.log(this.video_6Item)
    })
  }

}
