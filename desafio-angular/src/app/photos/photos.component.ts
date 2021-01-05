import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';
import { Photo } from './photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor( private photosService: PhotosService) { }

  public paginaAtual = 1;
  public photos: Photo[] | undefined;

  ngOnInit() {
    this.photosService.listarPhotos()
      .subscribe(
        photos => {
          this.photos = photos;
          console.log(photos);
        },
        error => console.log(error)
      );
  }

}
