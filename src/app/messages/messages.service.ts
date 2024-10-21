import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    // Setup the behaviour subject 
    // Special naaming convention used by RxJs related variable: messages$
    messages$ = new BehaviorSubject<string[]>([]);
    private messages: string[] = [];
    get allMessages() {
        return [...this.messages];
    }

    addMessage(message: string) {
        this.messages = [...this.messages, message];
        // emit new event through behaviour subject
        this.messages$.next([...this.messages]);
    }
}