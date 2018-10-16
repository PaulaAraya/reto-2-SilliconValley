import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PicturesComponent } from './components/pictures/pictures.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiUnsplashService } from './services/api-unsplash.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ApiUnsplashService],
  bootstrap: [AppComponent]
})
export class AppModule { }
