import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'kg-card',
  styleUrl: 'kg-card.css',
  shadow: true,
})
export class KgCard {
  private containerElement?: HTMLElement;

  @Prop() name: string;
  @Prop() artworktitle: string;
  @Prop() description: string;
  @Prop() directions: string;
  @Prop() maplink: string;
  @Prop() images: Array<any>;
  
  @State() active: boolean;

  componentWillRender() {
  }

  private slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  activateCard() {
    this.containerElement.classList.toggle('active');
  }

  render() {
    console.log(this.images)
    return (
      <div class="container" ref={el => this.containerElement = el as HTMLElement}>
        <div class="image-and-title">
        <ion-slides pager={true} options={this.slideOpts}>
          {this.images?.map(image => (
            <ion-slide>
                <img src={process.env.STRAPI_API_URL + image['attributes'].url } alt={this.name + ', ' + this.artworktitle} />
            </ion-slide>
          )) }
        </ion-slides>
        <header class="title-header" onClick={()=>this.activateCard()}>
          <div class="title-container">
            <h1>{this.artworktitle}</h1>
            <h2>{this.name}</h2>
          </div> 
          <button aria-label="Expand" class="expand-info" aria-pressed="false">
            <span class="hidden">Se mer</span>
            <svg width="89" height="69" viewBox="0 0 89 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.6889 13.8713C48.5315 13.8713 51.6466 10.7661 51.6466 6.93567C51.6466 3.10521 48.5315 0 44.6889 0C40.8462 0 37.7311 3.10521 37.7311 6.93567C37.7311 10.7661 40.8462 13.8713 44.6889 13.8713Z" fill="black"/>
              <path d="M46.4781 19.4595H42.5022V42.367H19.6608V46.3302H42.5022V69H46.4781V46.3302H69.3592V42.367H46.4781V19.4595Z" fill="black"/>
              <path d="M82.0423 51.3438C85.8849 51.3438 89 48.2385 89 44.4081C89 40.5776 85.8849 37.4724 82.0423 37.4724C78.1996 37.4724 75.0845 40.5776 75.0845 44.4081C75.0845 48.2385 78.1996 51.3438 82.0423 51.3438Z" fill="black"/>
              <path d="M6.95778 51.106C10.8005 51.106 13.9156 48.0008 13.9156 44.1703C13.9156 40.3398 10.8005 37.2346 6.95778 37.2346C3.11511 37.2346 0 40.3398 0 44.1703C0 48.0008 3.11511 51.106 6.95778 51.106Z" fill="black"/>
            </svg>
            </button>
          </header> 
        </div>
        <div class="info-container">
          <div class="info">
            <div class="description" innerHTML={this.description}>
            </div>
            <div class="directions">
              <div innerHTML={this.directions}></div>
              <div class="maplink">Finn frem til verket og veibeskrivelse i <a target="_blank" href={this.maplink}>Google Maps</a></div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}
