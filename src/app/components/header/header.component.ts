import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiServices } from '../../app.services'

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listlanguages :any;
  datalanguages :any;
  current_languages_header :any

  constructor(private translate: TranslateService, private services : ApiServices) { }

  ngOnInit() {

      this.current_languages_header = localStorage.getItem('currentLanguages');
      // console.log(this.current_languages_header);

      (<any> $)('.fi-site-toggle').click(function(){
          $('body').addClass("fi-cookie-banner-open dropdown-main--open fi-section-dropdown-open");
          $('.fi-section-header__dropdown__close').removeClass('hidden');
          $('.fi-section-header__dropdown--vertical').removeClass('hidden');
          $('.icon-close').removeClass('hidden');

      })  

      $('.icon-close').on('click', function () {
          $('.icon-close').addClass('hidden');
          $('body').removeClass("fi-site-dropdown-open");
          $('body').removeClass("dropdown-main--open");
          $('body').removeClass("dropdown-login--open");
          $('body').removeClass("dropdown-search--open");
          $('body').removeClass("dropdown-lang--open");


          $(this).closest('.fi-section-header__dropdown-wrap').find('.fi-section-header__dropdown__close').addClass('hidden');
          $(this).closest('.fi-section-header__dropdown-wrap').find('.fi-section-header__dropdown--vertical').addClass('hidden');
          $(this).closest('body').removeClass('fi-cookie-banner-open dropdown-main--open fi-section-dropdown-open');

          //search bar
          $(this).closest('.fi-site-header--competition ').find('.fi-site-header__dropdown__search').addClass('hidden');
          $(this).closest('.fi-site-header--competition ').find('.fi-site-header__dropdown__close').addClass('hidden');

          //login bar
          $(this).closest('.fi-site-header--competition ').find('.fi-site-header__dropdown__login').addClass('hidden');
      });

      //search
      $('.fi-icons-bar__search').click(function(){
          $('body').addClass("dropdown-search--open fi-site-dropdown-open");
          $(this).closest('.fi-site-header--competition').find('.fi-site-header__dropdown__close').removeClass('hidden');
          $(this).closest('.fi-site-header--competition').find('.icon-close').removeClass('hidden');

          $('.fi-site-header__dropdown__search').removeClass('hidden')
      })


      //login
      $('.fi-icons-bar__login').click(function(){
          $('body').addClass("dropdown-login--open fi-site-dropdown-open");
          $(this).closest('.fi-site-header--competition').find('.fi-site-header__dropdown__close').removeClass('hidden');
          $(this).closest('.fi-site-header--competition').find('.icon-close').removeClass('hidden');

          $('.fi-site-header__dropdown__login').removeClass('hidden')
          
      })


      $(window).scroll(function () {
        var scrollHeight = 162;
       
        if ($(window).scrollTop() >= scrollHeight && $('.fi-site-header').hasClass('fi-site-header--competition')) {
          $('.fi-section-header').addClass('navbar-fixed-top');
          $('.fi-site-header').removeClass('navbar-fixed-top');
        }
        else {
          $('.fi-section-header').removeClass('navbar-fixed-top');
        }
      });

      //call data languages
      this.GetLanguages();

  }





    //get languages
    GetLanguages(){
      this.services.getListLanguages().subscribe(res =>{

          this.listlanguages = res;

          this.datalanguages = this.listlanguages.languages;
      })
    }

    //change languages
    switchLanguage(lang){
        localStorage.setItem("currentLanguages", lang);

        this.translate.use(localStorage.getItem('currentLanguages'));
        window.location.reload();
    }

}
