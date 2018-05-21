import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http);
}


@NgModule({
    imports: [
    HttpClientModule,
    CommonModule,
    TranslateModule.forRoot({
        loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        })
    ],
    exports: [
      CommonModule,
      TranslateModule
    ]
})
export class SharedModule {
    language_default: any;

    constructor(private translate: TranslateService) {
        this.language_default = localStorage.getItem('currentLanguages');

       if(!this.language_default){
            this.language_default = 'fr'
            translate.use(this.language_default);
           localStorage.setItem('currentLanguages',this.language_default)
       }
    }

}
