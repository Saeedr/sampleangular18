import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { PostInterface } from '../Models/PostInterface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})

export class PostsComponent implements OnInit {
  posts?:Observable<PostInterface[]>
constructor(private service:PostsService){

}
ngOnInit(): void {
  this.posts=this.service.getPosts();
}
}
