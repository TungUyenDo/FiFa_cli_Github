import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRouters} from './app.routers';
import { HeaderComponent } from './components/header/header.component';
import { Footer1Component } from './components/footer1/footer1.component';
import { Footer2Component } from './components/footer2/footer2.component';
import { Footer3Component } from './components/footer3/footer3.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Footer1Component,
    Footer2Component,
    Footer3Component
  ],
  imports: [
    BrowserModule,
    AppRouters
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
