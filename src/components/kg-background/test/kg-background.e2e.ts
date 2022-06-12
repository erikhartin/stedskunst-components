import { newE2EPage } from '@stencil/core/testing';

describe('kg-background', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kg-background></kg-background>');

    const element = await page.find('kg-background');
    expect(element).toHaveClass('hydrated');
  });
});
