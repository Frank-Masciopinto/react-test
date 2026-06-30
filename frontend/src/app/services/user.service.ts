import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DirectoryUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiUrl = '/api/users/';

  constructor(private readonly http: HttpClient) {}

  getUsers(search = ''): Observable<DirectoryUser[]> {
    const params = search ? { search } : undefined;
    // TODO: expose loading/error state to components (BehaviorSubject or component-level handling)
    return this.http.get<DirectoryUser[]>(this.apiUrl, { params });
  }
}
