import {Image} from './image';
export class Gallery {
  id: number;
  name: string;
  images: Array<Image>;
  icon: string;
  description: string;
  image: string;
  external_url: string;
  constructor(data) {
     Object.assign(this, data);
  }
}
