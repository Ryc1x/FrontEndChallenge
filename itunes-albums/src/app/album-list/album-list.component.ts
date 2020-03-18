import { Component, OnInit } from '@angular/core';

import { AlbumComponent } from '../album/album.component';
import { ItunesService } from '../itunes.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})


export class AlbumListComponent implements OnInit {

  albums;
  searchText;

  constructor(
    private itunesService: ItunesService,
  ) { }

  ngOnInit() {
    this.albums = this.itunesService.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
      .subscribe(
        data => {
          this.albums = data.feed.entry;
        },
        err => {
          console.log(err);
        }
      )
  }

  test() {
    console.log(this.albums);
  }
}
