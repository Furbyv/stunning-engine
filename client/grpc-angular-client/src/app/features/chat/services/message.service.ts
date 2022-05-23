import { Injectable } from '@angular/core';
import { toAsyncState } from '@ngneat/loadoff';
import {
  map,
  reduce,
  ReplaySubject,
  scan,
  Subject,
  switchMap,
  tap,
  concatMap,
  withLatestFrom
} from 'rxjs';
import { Connect, Message } from 'src/app/protos/message.pb';
import { MessagingClient } from 'src/app/protos/message.pbsc';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private connect$$: Subject<Connect> = new ReplaySubject<Connect>(1);
  connected$ = this.connect$$.asObservable();
  private disconnect$$: Subject<void> = new ReplaySubject<void>(1);
  private message$$: Subject<string> = new ReplaySubject<string>(1);

  messageStream$ = this.connect$$.pipe(
    concatMap(c => this.messagingClient.connectToChat(c)),
    map(msg => [msg]),
    scan((acc, msg) => acc.concat(msg))
  );

  disconnect$ = this.disconnect$$.pipe(
    withLatestFrom(this.connect$$),
    switchMap(([_, c]) => this.messagingClient.unsubscribe(c))
  );
  sendMessage$ = this.message$$.pipe(
    withLatestFrom(this.connect$$),
    switchMap(([message, connection]) =>
      this.messagingClient
        .sendMessage(new Message({ username: connection.username, message }))
        .pipe(toAsyncState())
    )
  );

  constructor(private messagingClient: MessagingClient) {}

  sendMessage(message: string) {
    this.message$$.next(message);
  }

  connectToChat(username: string) {
    this.connect$$.next(new Connect({ username }));
  }

  disconnect() {
    this.disconnect$$.next();
  }
}
