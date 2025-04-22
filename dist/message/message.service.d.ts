export interface Message {
    id?: string;
    author: string;
    message: string;
    title: string;
    longitude?: number;
    latitude?: number;
}
export declare class MessageService {
    getMessage(): Promise<Message[]>;
    addMessage(message: Message): Promise<void>;
}
