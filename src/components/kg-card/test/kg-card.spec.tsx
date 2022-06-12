import { newSpecPage } from '@stencil/core/testing';
import { KgCard } from '../kg-card';

describe('kg-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KgCard],
      html: `<kg-card></kg-card>`,
    });
    expect(page.root).toEqualHtml(`
      <kg-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kg-card>
    `);
  });
});
