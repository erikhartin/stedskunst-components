import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'kg-intro',
  styleUrl: 'kg-intro.css',
  shadow: true,
})

export class KgIntro {

  @Prop() introtext: string

  render() {
    return (
      <div class="introtext">
        {this.introtext}
      </div>
    );
  }

}
