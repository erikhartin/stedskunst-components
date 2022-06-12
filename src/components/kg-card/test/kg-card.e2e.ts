import { newE2EPage } from '@stencil/core/testing';

describe('kg-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<kg-card></kg-card>');

    const element = await page.find('kg-card');
    expect(element).toHaveClass('hydrated');
  });
});
