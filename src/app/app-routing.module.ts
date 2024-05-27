import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:'',component:MainComponent,pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'AboutMe',component:AboutMeComponent},
{path:'Contact',component:ContactComponent},
{path:'Posts',component:PostsComponent},
{path:'gallery',component:GalleryComponent}

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
