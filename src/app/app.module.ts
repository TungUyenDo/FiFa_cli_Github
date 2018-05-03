import { HomeComponent } from './main-page/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouters } from "./app.routers";


import { AppComponent } from './app.component';
import {MainPageComponent} from "./main-page/main-page.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  //import component child
  declarations: [
    AppComponent,
    MainPageComponent, 
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  //import module parent 
  imports: [
    BrowserModule,
    AppRouters,
    // MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
