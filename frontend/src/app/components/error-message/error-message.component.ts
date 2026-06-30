import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  template: ``,
})
export class ErrorMessageComponent {
  @Input() message = '';

  // TODO: render error text in red
}
