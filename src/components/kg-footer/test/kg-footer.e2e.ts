import { newE2EPage } from '@stencil/core/testing';

describe('kg-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kg-footer></kg-footer>');

    const element = await page.find('kg-footer');
    expect(element).toHaveClass('hydrated');
  });
});
