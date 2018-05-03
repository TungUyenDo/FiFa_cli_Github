import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";

import {HomeComponent} from './main-page/home/home.component'

import {NewsComponent} from './main-page-1/news/news.component'
import {PhotosComponent} from './main-page-1/photos/photos.component'
import {VideosComponent} from './main-page-1/videos/videos.component'
import {TeamsComponent} from './main-page-1/teams/teams.component'
import {DestinationComponent} from './main-page-1/destination/destination.component'

import {GroupsComponent} from './main-page-2/groups/groups.component'
import {MatchesComponent} from './main-page-2/matches/matches.component'

const MainRouters: Routes = [
    {   path: '', component: HomeComponent },
    {   path: 'news',component: NewsComponent },
    {   path: 'photos',component: PhotosComponent},  
    {   path: 'videos',component: VideosComponent},  
    {   path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(MainRouters)],
  exports: [RouterModule]
})
export class AppRouters { }