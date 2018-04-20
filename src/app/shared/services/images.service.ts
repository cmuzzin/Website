import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  constructor() { }

  getItemImages() {
    return [
      {
        collection: "My Spotify",
        images: [
          {
            src: '../../assets/mySpotifyImages/login.png',
            title: 'Login'
          },
          {
            src: '../../assets/mySpotifyImages/playlists.png',
            title: 'Playlist'
          },
          {
            src: '../../assets/mySpotifyImages/albums.png',
            title: 'Albums'
          },
          {
            src: '../../assets/mySpotifyImages/results.png',
            title: 'Results'
          },
          {
            src: '../../assets/mySpotifyImages/more_results.png',
            title: 'Results cont.'
          },
          {
            src: '../../assets/mySpotifyImages/playlist.png',
            title: 'Playlist'
          },
          {
            src: '../../assets/mySpotifyImages/artist.png',
            title: 'Artist'
          },
          {
            src: '../../assets/mySpotifyImages/add_to_playlists.png',
            title: 'Add To Playlist'
          },
        ],
        toggle: true
      },
      {
        collection: 'Item Web',
        images: [
          {
            src: '../../assets/ItemWeb/itemWeb_existingProduct.PNG',
            title: 'Product'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_existingBundle.PNG',
            title: 'Bundle'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_createCollection.PNG',
            title: 'New collection'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_existingCollection.PNG',
            title: 'Collection Search'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_modalExample.PNG',
            title: 'Collection'
          }
        ],
        icon:'fa-tag',
        toggle: true
      },
      {
        collection: 'MCM',
        images: [
          {
            src: '../../assets/MCM/mcm_login.PNG',
            title: 'login'
          },
          {
            src: '../../assets/MCM/mcm_calendarView.PNG',
            title: 'Calendar'
          },
          {
            src: '../../assets/MCM/mcm_dayview.PNG',
            title: 'Day View'
          },
          {
            src: '../../assets/MCM/mcm_editGroupModal.PNG',
            title: 'Edit a Group'
          },
          {
            src: '../../assets/MCM/mcm_noteModal.PNG',
            title: 'Notes'
          },
          {
            src: '../../assets/MCM/mcm_search.PNG',
            title: 'Search'
          },
          {
            src: '../../assets/MCM/mcm_admin.PNG',
            title: 'Admin'
          }
        ],
        icon:'fa-calendar',
        toggle: true
      },
    ]
  }

}
