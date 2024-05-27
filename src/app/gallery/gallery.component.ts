import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../Models/PostInterface';
import { Observable } from 'rxjs';
import { photoInterFace } from '../Models/phtot.model';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{
  curentpage:number=1
  photos:photoInterFace[]=[];
constructor(private service:GalleryService){

}
ngOnInit(): void {

  this.detectLazyLoading();
}
detectLazyLoading(){
  const observer =new IntersectionObserver(enteris=> {
    enteris.forEach(enery=>{
      if(enery.isIntersecting){
        console.log('load more ...');
        this.service.getphoto(this.curentpage).subscribe(data=>{
         data.forEach(image=>{
          this.photos.push(image);
         });
          this.curentpage++;
        });
  
      }

  });
});
observer.observe(document.querySelector('.lazy-loading-detector')!);
}
}

