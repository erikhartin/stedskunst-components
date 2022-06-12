import { newE2EPage } from '@stencil/core/testing';

describe('kg-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kg-logo></kg-logo>');

    const element = await page.find('kg-logo');
    expect(element).toHaveClass('hydrated');
  });
});
