import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ApiServices } from "../app.services";

import 'owl.carousel';
declare var $: any;


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
  list_data_photo_top: any;
  data_photo: any;
  carouselPhotosOptions : any
  carouselPhotosOptionsBottom : any


  constructor(private apiServices: ApiServices) { }

  ngOnInit() {
    this.GetPhotos();

    

  }

  PhotosSlider(){
    console.log('slider')
      var sync1 = $("#sliderTop");
      var sync2 = $("#navigation");

      var flag = false;

      var slides = sync1.owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: [$('.arrow-wrap_left'), $('.arrow-wrap_right')]
      });
      var thumbs = sync2.owlCarousel({
        items: 4,
        margin: 10,
        nav: true,
        dots: false,
        navText: [$('.navigate_left'), $('.navigate_right')]
      }).on('click', '.owl-item', function (e) {
        e.preventDefault();
        sync1.trigger('to.owl.carousel', [$(e.target).parents('.owl-item').index(), 300, true]);
      }).on('change.owl.carousel', function (e) {
        if (e.namespace && e.property.name === 'position' && !flag) {
          //nsole.log('...');
        }
      }).data('owl.carousel');
  }

  GetPhotos() {
    this.apiServices.getPhotos(this.get_photos).subscribe(res => {
      this.data_photo = res;

      this.list_data_photo_top = this.data_photo.data.items;

      this.list_data_photo_top.forEach(element => {
        
        element.photos.data[0].link = element.photos.data[0].link.split('http://img.fifa.com/image/upload/t_l5/');

        if (element.photos.data[0].link[0] == '') {
          element.photos.data[0].link[0] = 'http://img.fifa.com/image/upload/t_l3/' + element.photos.data[0].link[1]
        }

        return element
       
      });

      setTimeout(() => {
        this.PhotosSlider();
      }, 0);

      console.log(this.list_data_photo_top)

    })
  }


}
