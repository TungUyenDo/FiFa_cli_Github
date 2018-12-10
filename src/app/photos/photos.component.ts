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
    page:1
  }
  list_data_photo: any;
  list_data_photo_top: any;
  data_photo: any;

  all_data_photo: any;
  list_all_data_photo: any;

  carouselPhotosOptions : any;
  carouselPhotosOptionsBottom : any;
  index : any = 1;
  list_image_link :any;
  end_page : any;
  photo_detail: any
  photo_owl: any;

  list_images_owl : any;
  photo_detail_owl :any;
  link:any

  constructor(private apiServices: ApiServices) { }

  ngOnInit() {

    this.list_image_link = [];
    this.GetPhotos();

    

  }

  PhotosSlider(){
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
      // console.log(res)

      this.list_data_photo_top = this.data_photo.data.items;

      // check when to end page
      this.end_page = this.data_photo.data.paginator.total_pages;

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


    })
  }

  Func_AllPhotos(){
    this.index++;
    this.get_photos.page = this.index;

    this.apiServices.getPhotos(this.get_photos).subscribe(res => {
      this.all_data_photo = res;

      this.list_all_data_photo = this.all_data_photo.data.items;

      this.list_all_data_photo.forEach(element => {
        // console.log(element)
        this.list_image_link.push(element.photos.data[0].link)
        return this.list_image_link
      });

      // console.log(this.list_all_data_photo)
      // console.log(this.list_image_link);

    })
  }

  GetAllPhotos(){
      this.Func_AllPhotos()
  }

  click_NextPhotosPage(){
    $('#Photo_detail').owlCarousel('destroy')
      this.Func_AllPhotos()
  }


  close_popup(){
    $(".popup_modal.photos").removeClass('in');

    $('body').css('overflow', 'auto');
  }

  Slider_Photos_Detail(){
     $('#Photo_detail').owlCarousel({
      items: 1,
      nav: true,
      dots: false,
    })
    
  }


  click_detailImage(link){

    this.link = link.replace('http://img.fifa.com/image/upload/t_l5/', 'http://img.fifa.com/image/upload/t_l3/')

    $(".popup_modal.photos").addClass('in');

    $('body').css('overflow', 'hidden');

    // this.list_images_owl = []
    // this.list_image_link.forEach(element => {
    //     element = element.replace('http://img.fifa.com/image/upload/t_l5/', 'http://img.fifa.com/image/upload/t_l3/')

    //     // slider for popup
    //     this.list_images_owl.push(element);
    //     console.log(this.list_images_owl);

    //     setTimeout(() => {
    //       this.Slider_Photos_Detail()
    //     }, 0);

    // });
   

    // console.log(this.list_image_link)
     
      
  }




}
