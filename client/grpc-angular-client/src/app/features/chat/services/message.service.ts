import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, switchMap, withLatestFrom } from 'rxjs';
import { Connect } from 'src/app/protos/message.pb';
import { MessagingClient } from 'src/app/protos/message.pbsc';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private connect$$: Subject<Connect> = new ReplaySubject<Connect>(1);
  private disconnect$$: Subject<void> = new ReplaySubject<void>(1);
  messageStream$ = this.connect$$.pipe(
    switchMap(c => this.messagingClient.connectToChat(c))
  );
  disconnect$ = this.disconnect$$.pipe(
    withLatestFrom(this.connect$$),
    switchMap(([_, c]) => this.messagingClient.unsubscribe(c))
  );

  constructor(private messagingClient: MessagingClient) {}

  connectToChat(username: string) {
    this.connect$$.next(new Connect({ username }));
  }

  disconnect() {
    this.disconnect$$.next();
  }
}
