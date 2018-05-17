import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ApiServices } from "../app.services";

import { SlickComponent} from 'ngx-slick'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {


  //data get news
  get_photos: any = {
    limit: 10,
    page: 1
  }
  list_data_photo: any;
  data_photo: any;

  constructor(private apiServices: ApiServices) { }

  ngOnInit() {
    this.GetPhotos();


  }

  GetPhotos() {
    console.log('news main page')
    this.apiServices.getPhotos(this.get_photos).subscribe(res => {
      this.data_photo = res;

      this.list_data_photo = this.data_photo.data.items;

      console.log(this.list_data_photo)

    })
  }


}
