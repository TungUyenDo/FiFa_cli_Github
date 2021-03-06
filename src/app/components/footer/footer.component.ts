import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiServices } from '../../app.services'

declare var $: any;



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  current_languages :  any;
  listlanguages :any;
  datalanguages :any;

  constructor(private translate: TranslateService, private services : ApiServices) {}

    

  ngOnInit() {

      $('.fi-select__languages').click(function(e){
          e.preventDefault();
          $('.dropdown-menu').toggleClass('active')
      })

      this.GetLanguages();

      //take current languages on localtorage
      this.current_languages = localStorage.getItem('currentLanguages');
      this.translate.use(this.current_languages);

    //   console.log(this.current_languages)
  }

  //get languages
  GetLanguages(){
      this.services.getListLanguages().subscribe(res =>{

          this.listlanguages = res;

          this.datalanguages = this.listlanguages.languages;
      })
  }


  //change languages
  switchLanguage(a) {
    
    this.current_languages = localStorage.getItem('currentLanguages');

    localStorage.setItem('currentLanguages',a);

    this.translate.use(localStorage.getItem('currentLanguages'));

    window.location.reload()
  }

}
