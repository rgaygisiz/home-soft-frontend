import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'kosaml-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'home soft';

  @Input()
  isAuthenticated: boolean;

  @Output()
  toggleProjectBar = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onToggleProjectBar() {
    this.toggleProjectBar.emit();
  }
}
