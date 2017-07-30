import { Assignment5.2Page } from './app.po';

describe('assignment5.2 App', () => {
  let page: Assignment5.2Page;

  beforeEach(() => {
    page = new Assignment5.2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
