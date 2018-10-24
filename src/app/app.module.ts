import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PicturesComponent } from './components/pictures/pictures.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiUnsplashService } from './services/api-unsplash.service';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    PicturesComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ApiUnsplashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
