import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUnsplashService {
  // tslint:disable-next-line:max-line-length
  public apiUrl = 'https://api.unsplash.com/search/photos?client_id=c389079cffa744b12d7668f3d3436c71873b84d8ca761ddf171edcbe0bf1fd95&client_secret=8ab1d2357c239257b417a5157c0fea8de9af9f344d4c3eb076f51e5f02f6ece4?&per_page=100&query=office';

  constructor(public http: HttpClient) {
    this.getDataApi();
  }

  getDataApi() {
      return this.http.get(this.apiUrl);
  }
}
