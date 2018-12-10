
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppComponent } from "./app.component";

import {HomeComponent} from './home/home.component'

import { NewsComponent } from './news/news.component';
import {PhotosComponent} from './photos/photos.component'
import {VideosComponent} from './videos/videos.component'
import {TeamsComponent} from './teams/teams.component'
import { StadiumComponent} from './stadium/stadium.component'

import {GroupsComponent} from './groups/groups.component'
import {MatchesComponent} from './matches/matches.component'

import { LivecoresComponent} from './livecores/livecores.component'
import { DetailMatchesComponent } from './livecores/detail-matches/detail-matches.component';
import { ListMatchesComponent } from './livecores/list-matches/list-matches.component';

const MainRouters: Routes = [
    {   path: '', component: HomeComponent },
    {   path: 'news',component: NewsComponent},  
    {   path: 'photos',component: PhotosComponent},  
    {   path: 'videos',component: VideosComponent},  
    {   path: 'teams',component: TeamsComponent},  
    {   path: 'stadium',component: StadiumComponent},  
    {   path: 'groups',component: GroupsComponent},  
    {   path: 'matches',component: MatchesComponent},  
    {   path: 'livecores',component: LivecoresComponent}, 
    {
      path: "livecores", component: LivecoresComponent,
      children: [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: "list", component: ListMatchesComponent },
        { path: "detail/234", component: DetailMatchesComponent }
      ]
    }, 
    {   path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(MainRouters)],
  exports: [RouterModule]
})
export class AppRouters { }