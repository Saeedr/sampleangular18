import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { photoInterFace } from '../Models/phtot.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private api:string="https://picsum.photos/v2/list?limit=10&page=";
  constructor(private  http:HttpClient){
   }
   getphoto(page :number =1):Observable<photoInterFace[]> {
    return this.http.get(this.api.concat(page.toString())) as Observable<photoInterFace[]>;
  }
}
