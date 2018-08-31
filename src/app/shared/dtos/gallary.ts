export class Gallery {
  name: string;
  images: Array<any>;
  icon: string;
  constructor(data) {
    this.name = data.name;
    this.images = data.images;
    this.icon = data.icon;
  }
}
