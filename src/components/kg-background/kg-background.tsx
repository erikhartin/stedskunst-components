import { Listen, Component, h } from '@stencil/core';

@Component({
  tag: 'kg-background',
  styleUrl: 'kg-background.css',
  shadow: true,
})


export class KgBackground {
  private bgElement?: HTMLElement;

  @Listen('scroll', { target: 'window' })
  handleScroll() {
    const pos = this.getVerticalScrollPercentage(document.body) + '%'
//  console.log(pos)
    this.bgElement.style.backgroundPositionY = pos
  }

  getVerticalScrollPercentage( elm ){
    const p = elm.parentNode
    return 100 - ((elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100)
  }
  

  render() {
    return (
      <div class="background" ref={el => this.bgElement = el as HTMLElement}></div>
    );
  }

}
