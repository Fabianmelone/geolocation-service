import { MessageService, Message } from './message.service';
export declare class MessageController {
    private readonly messageService;
    constructor(messageService: MessageService);
    getMessages(): Promise<any>;
    getMessageForm(): void;
    addMessage(post: Message): Promise<void>;
}
