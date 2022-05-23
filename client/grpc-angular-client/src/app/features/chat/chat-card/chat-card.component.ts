import { Component, OnDestroy } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Message } from 'src/app/protos/message.pb';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chat-card',
  templateUrl: 'chat-card.component.html',
  styleUrls: ['chat-card.component.scss']
})
export class ChartCardComponent implements OnDestroy {
  username: string = '';
  message: string = '';
  messages$: Observable<Message[]> = this.messageService.messageStream$;
  isConnected$ = this.messageService.connected$;
  sending$ = this.messageService.sendMessage$.pipe(map(state => state.loading));

  constructor(private messageService: MessageService) {}

  ngOnDestroy(): void {
    this.messageService.disconnect();
  }

  sendMessage(message: string) {
    this.messageService.sendMessage(message);
    this.message = '';
  }

  joinChat(username: string) {
    this.messageService.connectToChat(username);
  }

  trackByFn(_: number, msg: Message) {
    return msg.id;
  }
}
