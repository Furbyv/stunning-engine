import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Message } from 'src/app/protos/message.pb';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chat-card',
  templateUrl: 'chat-card.component.html',
  styleUrls: ['chat-card.component.scss']
})
export class ChartCardComponent {
  username: string = '';
  message: string = '';
  messages$: Observable<Message> = this.messageService.messageStream$;
  isConnected$ = this.messageService.connected$;
  sending$ = this.messageService.sendMessage$.pipe(map(state => state.loading));
  constructor(private messageService: MessageService) {}

  sendMessage(message: string) {
    this.messageService.sendMessage(message);
  }

  joinChat(username: string) {
    this.messageService.connectToChat(username);
  }
}
