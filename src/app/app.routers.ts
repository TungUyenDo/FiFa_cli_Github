import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppComponent } from "./app.component";

import {HomeComponent} from './home/home.component'

const MainRouters: Routes = [
    {   path: '', component: HomeComponent }, 
    {   path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(MainRouters)],
  exports: [RouterModule]
})
export class AppRouters { }