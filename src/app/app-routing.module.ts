import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gallery' },
  { path: 'home', component: HomeComponent }, 
  {path: 'music', component: MusicComponent},
  {path: 'gallery', component: GalleryComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
