import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


import {HomeComponent} from './home/home.component'

const MainRouters: Routes = [
    {   path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(MainRouters)],
  exports: [RouterModule]
})
export class AppRouters { }