import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ApiServices } from "../app.services";

import {OwlCarousel} from 'ngx-owl-carousel';

import $ from 'jquery'
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
  carouselPhotosOptions : any
  carouselPhotosOptionsBottom : any


  constructor(private apiServices: ApiServices) { }

  ngOnInit() {
    this.GetPhotos();

    var flag = false;

    this.carouselPhotosOptions ={
      items:1,
      loop:true,
      nav: true,
      dots: false
    };
    this.carouselPhotosOptionsBottom ={
      items:4,
      loop:true,
      margin:10,
      nav: false,
      dots: true,
      navText: [$('.fi__nav--photos-next'), $('.fi__nav--photos-prev')]
    }
            
        $('#sliderBottom').on('click', '.owl-item', function(e) {
              e.preventDefault();	
              this.carouselPhotosOptions.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 300, true]);
        }).on('change.owl.carousel', function(e) {
                      if (e.namespace && e.property.name === 'position' && !flag) {
                      //nsole.log('...');
          }
        }).data('owl.carousel');

  }

  

  GetPhotos() {
    this.apiServices.getPhotos(this.get_photos).subscribe(res => {
      this.data_photo = res;

      this.list_data_photo = this.data_photo.data.items;

      console.log(this.list_data_photo)

    })
  }


}
