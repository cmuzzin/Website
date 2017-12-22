import { MyWebsitePage } from './app.po';

describe('my-website App', () => {
  let page: MyWebsitePage;

  beforeEach(() => {
    page = new MyWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
