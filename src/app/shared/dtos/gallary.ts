export class Gallary {
  collection: string;
  images: Array<{ src: string, title: string }>;
  icon: string;

  constructor(data) {
    this.collection = data.collection;
    this.images = data.images;
    this.icon = data.icon;
  }
}
