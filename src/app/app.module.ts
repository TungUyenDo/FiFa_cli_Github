
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRouters } from "./app.routers";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Footer1Component } from './components/footer-1/footer-1.component';
import { Footer2Component } from './components/footer-2/footer-2.component';

import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { NewsMainComponent } from './news/news-main/news-main.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { TeamsComponent } from './teams/teams.component';
import { DestinationComponent } from './destination/destination.component';

import { MatchesComponent } from './matches/matches.component';
import { GroupsComponent } from './groups/groups.component';


import { SharedModule} from "./share/share.module";

import { ApiServices } from "./services/api.services";
@NgModule({
  //import component child
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PhotosComponent,
    VideosComponent,
    TeamsComponent,
    DestinationComponent,
    MatchesComponent,
    GroupsComponent,
    Footer2Component,
    Footer1Component,
    NewsDetailComponent,
    NewsMainComponent,
    NewsComponent
  ],
  //import module parent 
  imports: [
    SharedModule,
    BrowserModule,
    AppRouters,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ApiServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
