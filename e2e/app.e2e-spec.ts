import { MywebappPage } from './app.po';

describe('mywebapp App', function() {
  let page: MywebappPage;

  beforeEach(() => {
    page = new MywebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
