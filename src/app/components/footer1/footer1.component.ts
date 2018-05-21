import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ApiServices } from '../../app.services'

@Component({
  selector: 'app-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.scss']
})
export class Footer1Component implements OnInit {
  current_languages :  any;
  listlanguages :any;
  datalanguages :any;


  constructor(private translate: TranslateService, private services : ApiServices) {}

    ngOnInit() {

      this.GetLanguages();

        //take current languages on localtorage
        this.current_languages = localStorage.getItem('currentLanguages');
        this.translate.use(this.current_languages);

        console.log(this.current_languages)
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
    console.log('ngmodel:',a);
    
    this.current_languages = localStorage.getItem('currentLanguages');
    console.log('lang from localstorage:',this.current_languages);

    localStorage.setItem('currentLanguages',a);
    console.log('after setItem into localtorage:',a);


    console.log('current languages:',localStorage.getItem('currentLanguages'))
    this.translate.use(localStorage.getItem('currentLanguages'));

    // localStorage.setItem('currentLanguages', this.current_languages);

  }
}
