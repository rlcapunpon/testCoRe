import { TestCoRePage } from './app.po';

describe('test-co-re App', function() {
  let page: TestCoRePage;

  beforeEach(() => {
    page = new TestCoRePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
