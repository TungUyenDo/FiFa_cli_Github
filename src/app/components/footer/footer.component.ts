import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  current_languages :  any;

  constructor(private translate: TranslateService) {}

    

  ngOnInit() {

      $('.fi-select__languages').click(function(e){
          e.preventDefault();
          $('.dropdown-menu').toggleClass('active')
      })

      //take current languages on localtorage
      this.current_languages = localStorage.getItem('currentLanguages');
      this.translate.use(this.current_languages);

      console.log(this.current_languages)
  }

  //change languages
  switchLanguage(a) {
    console.log('ng model',a);
    
    this.current_languages = localStorage.getItem('currentLanguages');
    console.log('lang from localstorage',this.current_languages);

    localStorage.setItem('currentLanguages',a);
    console.log('after select lang',a);
    this.translate.use(this.current_languages);

    // localStorage.setItem('currentLanguages', this.current_languages);

  }

}
