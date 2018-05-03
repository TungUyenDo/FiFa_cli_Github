import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";


const MainRouters: Routes = [
    {
        path: '', component: MainPageComponent 
    },
   
    
];

@NgModule({
  imports: [RouterModule.forRoot(MainRouters)],
  exports: [RouterModule]
})
export class AppRouters { }