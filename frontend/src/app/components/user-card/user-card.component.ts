import { Component, Input } from '@angular/core';

import { DirectoryUser } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  template: ``,
})
export class UserCardComponent {
  @Input({ required: true }) user!: DirectoryUser;

  // TODO: display name, email, company, and city
}
