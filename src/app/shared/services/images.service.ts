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
        description: 'Dummy text until I write out the description.',
        toggle: true,
        wip: false
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
            title: 'Collection Search'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_existingCollection.PNG',
            title: 'Collection'
          },
          {
            src: '../../assets/ItemWeb/itemWeb_modalExample.PNG',
            title: 'Modal'
          }
        ],
        description: 'Dummy text until I write out the description.',
        icon:'fa-tag',
        toggle: true,
        wip: false
      },
      {
        collection: 'MCM - Marketing Campaign Manager',
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
        description: 'Dummy text until I write out the description.',
        icon:'fa-calendar',
        toggle: true,
        wip: false
      },
      {
        collection: 'Store Planning & Construction',
        description: 'Dummy text until I write out the description.',
        images: [
          {
            src: '../../assets/SPC_Images/spc_login.png',
            title: 'Login'
          },
          {
            src: '../../assets/SPC_Images/spc_home.png',
            title: 'Home'
          },
          {
            src: '../../assets/SPC_Images/spc_search.png',
            title: 'Search'
          },
          {
            src: '../../assets/SPC_Images/spc_store.png',
            title: 'Store'
          },
          {
            src: '../../assets/SPC_Images/spc_building.png',
            title: 'Building'
          }
        ],
        toggle: true,
        wip: true
      },
      {
        collection: 'New Email Work Flow',
        description: 'Dummy text until I write out the description.',
        images: [
          {
            src: '../../assets/Email_Flow_Images/rememberMe.png',
            title: 'Step 1'
          },
          {
            src: '../../assets/Email_Flow_Images/prepCalc.png',
            title: 'Step 2'
          },
          {
            src: '../../assets/Email_Flow_Images/createALook.png',
            title: 'Step 3'
          },
          {
            src: '../../assets/Email_Flow_Images/supportingDocs.png',
            title: 'Step 4',
          },
          {
            src: '../../assets/Email_Flow_Images/storeoverride.png',
            title: 'Step 5'
          }
        ],
        toggle: true,
        wip: true
      }
    ]
  }

}
