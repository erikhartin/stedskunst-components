import { newSpecPage } from '@stencil/core/testing';
import { KgFooter } from '../kg-footer';

describe('kg-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KgFooter],
      html: `<kg-footer></kg-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <kg-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kg-footer>
    `);
  });
});
