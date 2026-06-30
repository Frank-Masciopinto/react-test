import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CapgeminiHeaderComponent } from './components/capgemini-header/capgemini-header.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { DirectoryUser } from './models/user.model';
import { UserService } from './services/user.service';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CapgeminiHeaderComponent,
    SearchBarComponent,
    UserListComponent,
    LoadingSpinnerComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  search = '';
  users: DirectoryUser[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private readonly userService: UserService,
    private readonly websocketService: WebsocketService,
  ) {
    // TODO: load users on init and wire loading/error states
    // TODO: connect websocketService and refresh list on live updates
    void this.userService;
    void this.websocketService;
  }

  onSearchChange(value: string): void {
    this.search = value;
    // TODO: filter users by name or email (case-insensitive) via API ?search= param
  }
}
