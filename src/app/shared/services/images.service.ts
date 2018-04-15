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
            src: '../../../assets/ItemWeb/itemWeb_existingProduct.PNG',
            title: 'Product'
          },
          {
            src: '../../../assets/ItemWeb/itemWeb_existingBundle.PNG',
            title: 'Product'
          }
        ],
        icon:'fa-tag'
      },
      {
        collection: 'SPC',
        images: [
          {
            src: '../../../assets/ItemWeb/itemWeb_existingProduct.PNG',
            title: 'Product'
          },
          {
            src: '../../../assets/ItemWeb/itemWeb_existingBundle.PNG',
            title: 'Product'
          }
        ],
        icon:'fa-building'
      },
      {
        collection: 'MCM',
        images: [
          {
            src: '../../../assets/ItemWeb/itemWeb_existingProduct.PNG',
            title: 'Product'
          }
        ],
        icon:'fa-calendar'
      },
      {
        collection: 'Mops',
        images: [
          {
            src: '../../../assets/ItemWeb/itemWeb_existingProduct.PNG',
            title: 'Product'
          }
        ],
        icon:'fa-money'
      }
    ]
  }

}
