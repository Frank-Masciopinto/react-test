import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  template: ``,
})
export class SearchBarComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  // TODO: controlled input with placeholder "Search by name or email..."
}
