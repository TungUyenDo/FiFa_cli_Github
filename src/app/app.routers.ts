import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppComponent } from "./app.component";

import {HomeComponent} from './home/home.component'

import {NewsMainComponent} from './news/news-main/news-main.component'
import { NewsComponent } from './news/news.component';
import {NewsDetailComponent} from './news/news-detail/news-detail.component'
import {PhotosComponent} from './photos/photos.component'
import {VideosComponent} from './videos/videos.component'
import {TeamsComponent} from './teams/teams.component'
import {DestinationComponent} from './destination/destination.component'

import {GroupsComponent} from './groups/groups.component'
import {MatchesComponent} from './matches/matches.component'

const MainRouters: Routes = [
    {   path: '', component: HomeComponent },
    {
      path: "news", component: NewsComponent,
      children: [
        { path: '', redirectTo: 'news', pathMatch: 'full' },
        { path: "news", component: NewsMainComponent },
        { path: "news-detail", component: NewsDetailComponent }
      ]
    },
    {   path: 'photos',component: PhotosComponent},  
    {   path: 'videos',component: VideosComponent},  
    {   path: 'teams',component: TeamsComponent},  
    {   path: 'destination',component: DestinationComponent},  
    {   path: 'groups',component: GroupsComponent},  
    {   path: 'matches',component: MatchesComponent},  
    {   path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(MainRouters)],
  exports: [RouterModule]
})
export class AppRouters { }