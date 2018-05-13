
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ApiServices } from "./app.services";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRouters } from './app.routers';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer1Component } from './components/footer1/footer1.component';
import { Footer2Component } from './components/footer2/footer2.component'

@NgModule({
  //import component child
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Footer1Component,
    Footer2Component,
  ],
  //import module parent 
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRouters
  ],
  providers: [
    ApiServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
