
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LiveCoresRoutingModule } from "./livecores.routers";

import { ApiServices } from "../app.services";
import { OwlModule } from 'ngx-owl-carousel'

import { MomentModule } from 'ngx-moment';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { LivecoresComponent } from './livecores.component';
import { ListMatchesComponent } from './list-matches/list-matches.component';
import { DetailMatchesComponent } from './detail-matches/detail-matches.component'


@NgModule({
    //import component child
    declarations: [
        LivecoresComponent,
        ListMatchesComponent,
        DetailMatchesComponent
    ],
    //import module parent 
    imports: [
        BrowserModule,
        LiveCoresRoutingModule,
        HttpModule,
        HttpClientModule,
        OwlModule,
        MomentModule,
    ],
    bootstrap: [LivecoresComponent],
    providers: [
        ApiServices
    ],
})
export class LiveCoresModule { }  
