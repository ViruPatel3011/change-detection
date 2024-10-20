import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MessagesListComponent } from './messages-list/messages-list.component';
import { NewMessageComponent } from './new-message/new-message.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [MessagesListComponent, NewMessageComponent],
  // This OnPush tells angular that this will only apply change detection when this component or its sub-components (tree) got any value change or any input value will change.
  // In this 3 ways its change
  // 1: Manullay triggered this component 
  // 2: Input on this component where you set this Push changed
  // 3: An event occured anywhere in ths component or in its childe components (its tree)
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  messages = signal<string[]>([]);

  get debugOutput() {
    console.log('[Messages] "debugOutput" binding re-evaluated.');
    return 'Messages Component Debug Output';
  }

  onAddMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
