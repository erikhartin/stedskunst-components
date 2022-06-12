import { newSpecPage } from '@stencil/core/testing';
import { KgBackground } from '../kg-background';

describe('kg-background', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KgBackground],
      html: `<kg-background></kg-background>`,
    });
    expect(page.root).toEqualHtml(`
      <kg-background>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kg-background>
    `);
  });
});
