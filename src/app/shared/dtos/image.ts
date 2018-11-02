export class Image {
  id: number;
  view: string;
  url: string;
  constructor(data) {
    this.id = data.id;
    this.view = data.view;
    this.url = data.url;
  }

}
