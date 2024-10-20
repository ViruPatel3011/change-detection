import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MessagesService {
    // Setup the behaviour subject 
    messages$ = new BehaviorSubject<string[]>([]);
    private messages: string[] = [];
    get allMessages() {
        return [...this.messages];
    }

    addMessage(message: string) {
        this.messages = [...this.messages, message];
        this.messages$.next([...this.messages]);
    }
}