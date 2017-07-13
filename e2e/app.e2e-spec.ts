import { BoostrapProjectPage } from './app.po';

describe('boostrap-project App', () => {
  let page: BoostrapProjectPage;

  beforeEach(() => {
    page = new BoostrapProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
