import { Component, OnInit } from '@angular/core';
import { ApiUnsplashService } from '../../services/api-unsplash.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  constructor( private api: ApiUnsplashService ) {
    this.getData();
  }

  public resultPicture = [];
  public dataPicture = [];
  public pictures = [];

  ngOnInit() {
  }

  getData() {
    this.api.getDataApi().subscribe(
      (pictures) => {
        // console.log(pictures);
        this.resultPicture.push(pictures);
        this.resultPicture.forEach(element => {
          this.dataPicture = element.results;
          // console.log(this.dataPicture);
          this.getPictures(this.dataPicture);
        });
      }
      );
  }

  getPictures(result: any) {
    result.forEach( data => {
      this.pictures.push({
        img: data.urls.regular,
        description: data.description
      });
      console.log(this.pictures);
    });
  }

}
