
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouters } from "./app.routers";


import { AppComponent } from './app.component';
import { HomeComponent } from './main-page/home/home.component';
import {MainPageComponent} from "./main-page/main-page.component";

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer1Component } from './components/footer-1/footer-1.component';
import { Footer2Component } from './components/footer-2/footer-2.component';

import { NewsComponent } from './main-page-1/news/news.component';
import { PhotosComponent } from './main-page-1/photos/photos.component';
import { VideosComponent } from './main-page-1/videos/videos.component';
import { TeamsComponent } from './main-page-1/teams/teams.component';
import { DestinationComponent } from './main-page-1/destination/destination.component';

import { MainPage2Component } from './main-page-2/main-page-2.component';
import { MatchesComponent } from './main-page-2/matches/matches.component';
import { GroupsComponent } from './main-page-2/groups/groups.component';



@NgModule({
  //import component child
  declarations: [
    AppComponent,
    MainPageComponent, 
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    PhotosComponent,
    VideosComponent,
    TeamsComponent,
    DestinationComponent,
    MainPage2Component,
    MatchesComponent,
    GroupsComponent,
    Footer2Component,
   
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
