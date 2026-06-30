import { Component, Input } from '@angular/core';

import { DirectoryUser } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  template: ``,
})
export class UserListComponent {
  @Input() users: DirectoryUser[] = [];

  // TODO: responsive card grid and "No users found" empty state
}
