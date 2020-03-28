import { Component, Input } from '@angular/core';

@Component({
  selector: 'kosaml-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input()
  width: number = 826;

  constructor() {}
}
