import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: '', component: AlbumListComponent
  },
  {
    path: 'test', component: AlbumComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
