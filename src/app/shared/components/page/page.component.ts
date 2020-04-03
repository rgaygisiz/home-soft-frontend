import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export enum PageSize {
  S = 'S',
  M = 'M',
  L = 'L',
}

@Component({
  selector: 'kosaml-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnChanges {
  @Input()
  size: string;

  width: number = 826;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (this.size) {
      switch (this.size) {
        case PageSize.S:
          this.width = 400;
          break;
        case PageSize.M:
          break;
        case PageSize.L:
          this.width = 1200;
          break;
        default:
          break;
      }
    }
  }
}
