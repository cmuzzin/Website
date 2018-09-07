export class Gallery {
  galleryId: number;
  galleryName: string;
  images: Array<any>;
  icon: string;
  isOpened: boolean;
  constructor(data) {
    this.galleryId = data.galleryId;
    this.galleryName = data.galleryName;
    this.images = data.images;
    this.icon = data.icon;
    this.isOpened = data.isOpened === "true";
  }
}
