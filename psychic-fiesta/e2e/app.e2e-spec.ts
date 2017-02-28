import { PsychicFiestaPage } from './app.po';

describe('psychic-fiesta App', function() {
  let page: PsychicFiestaPage;

  beforeEach(() => {
    page = new PsychicFiestaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
