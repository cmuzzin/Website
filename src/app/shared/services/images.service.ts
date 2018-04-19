import { Injectable } from '@angular/core';

@Injectable()
export class ImagesService {

  constructor() { }

  getItemImages() {
    return [
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
        icon:'fa-tag'
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
        icon:'fa-calendar'
      },
    ]
  }

}
