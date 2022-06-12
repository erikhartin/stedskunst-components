import { newSpecPage } from '@stencil/core/testing';
import { KgIntro } from '../kg-intro';

describe('kg-intro', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KgIntro],
      html: `<kg-intro></kg-intro>`,
    });
    expect(page.root).toEqualHtml(`
      <kg-intro>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kg-intro>
    `);
  });
});
