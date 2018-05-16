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
  video_3Item : any;

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

      // this.data_video.forEach(function (value, key) {
      //   // console.log(value, key);
      //   while(key <= 4){
      //     console.log(value)
      //      console.log('key 4'); 
      //   }

      // });
      console.log(this.video_4Item.length)
      for( var i = 0; i<this.data_video.length;i++){

        

        // if(this.video_4Item.length != 4){
        //   this.video_4Item.push(this.data_video[i])
        //   console.log(this.video_4Item)
        // }else{
        //   this.video_3Item.push(this.data_video[i])
        //   console.log(this.video_3Item)
        // }
       
        
      }



    })
  }

}
