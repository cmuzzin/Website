import {Image} from "./image";
export class Gallery {
  id: number;
  name: string;
  images: Array<Image>;
  icon: string;
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.images = data.images;
    this.icon = data.icon;
  }
}
