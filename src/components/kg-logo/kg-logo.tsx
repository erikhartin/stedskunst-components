import { Component, h } from '@stencil/core';

@Component({
  tag: 'kg-logo',
  styleUrl: 'kg-logo.css',
  shadow: true,
})
export class KgLogo {

  render() {
    return (
      <h1 class="logo">
        Kunstlandskap Gudbrandsdalen
      </h1>
    );
  }

}
