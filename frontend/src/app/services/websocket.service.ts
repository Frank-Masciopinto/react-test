import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebsocketService {
  private socket: WebSocket | null = null;
  private readonly messagesSubject = new Subject<unknown>();
  readonly messages$ = this.messagesSubject.asObservable();

  connect(): void {
    // TODO: connect to ws://localhost:8000/ws/users/ (or /ws/users/ via dev proxy)
    // TODO: parse incoming JSON and push to messagesSubject
    void this.socket;
  }

  disconnect(): void {
    // TODO: close WebSocket connection cleanly
    this.socket = null;
  }

  send(message: string): void {
    // TODO: send subscribe/unsubscribe messages to the backend consumer
    void message;
  }
}
