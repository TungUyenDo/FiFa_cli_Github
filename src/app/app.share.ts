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
  
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('fr');
    }


   

    //  constructor(private translate: TranslateService) {
                  
    //     translate.addLangs(["en", "fr"]);
    //     translate.setDefaultLang('en');

    //     let browserLang = translate.getBrowserLang();
    //     translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    // }
}
