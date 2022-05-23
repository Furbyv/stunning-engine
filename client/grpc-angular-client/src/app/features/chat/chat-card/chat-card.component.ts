import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/protos/message.pb';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-chat-card',
  templateUrl: 'chat-card.component.html',
  styleUrls: ['chat-card.component.scss']
})
export class ChartCardComponent {
  messages$: Observable<Message> = this.messageService.messageStream$;
  constructor(private messageService: MessageService) {}

  joinChat(username: string) {
    this.messageService.connectToChat(username);
  }
}
