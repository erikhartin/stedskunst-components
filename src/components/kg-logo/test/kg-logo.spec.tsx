import { newSpecPage } from '@stencil/core/testing';
import { KgLogo } from '../kg-logo';

describe('kg-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KgLogo],
      html: `<kg-logo></kg-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <kg-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kg-logo>
    `);
  });
});
