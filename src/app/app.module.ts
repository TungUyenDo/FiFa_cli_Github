
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRouters } from "./app.routers";


import { AppComponent  } from './app.component';
import { HomeComponent, SafePipe } from './home/home.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer1Component } from './components/footer1/footer1.component';

import { NewsComponent } from './news/news.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { TeamsComponent } from './teams/teams.component';
import { StadiumComponent } from './stadium/stadium.component';

import { MatchesComponent } from './matches/matches.component';
import { GroupsComponent } from './groups/groups.component';


import { ApiServices } from "./app.services";
import { OwlModule } from 'ngx-owl-carousel'

import { MomentModule } from 'ngx-moment';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { SharedModule } from './app.share'


@NgModule({
  //import component child
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Footer1Component,
    PhotosComponent,
    VideosComponent,
    TeamsComponent,
    StadiumComponent,
    MatchesComponent,
    GroupsComponent,
    NewsComponent,
    SafePipe
  ],
  //import module parent 
  imports: [
    BrowserModule,
    AppRouters,
    HttpModule,
    HttpClientModule,
    OwlModule,
    MomentModule,
    SharedModule
  ],
  providers: [
    ApiServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }  
