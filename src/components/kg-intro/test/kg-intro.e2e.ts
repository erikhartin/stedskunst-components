import { newE2EPage } from '@stencil/core/testing';

describe('kg-intro', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kg-intro></kg-intro>');

    const element = await page.find('kg-intro');
    expect(element).toHaveClass('hydrated');
  });
});
