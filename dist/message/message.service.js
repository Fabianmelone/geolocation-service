"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const DATA_FILE = './data/messages.json';
let MessageService = class MessageService {
    async getMessage() {
        const raw = await fs_1.promises.readFile(DATA_FILE, { encoding: 'utf-8' });
        return JSON.parse(raw);
    }
    async addMessage(message) {
        const raw = await fs_1.promises.readFile(DATA_FILE, { encoding: 'utf-8' });
        const messages = JSON.parse(raw);
        messages.push(message);
        await fs_1.promises.writeFile(DATA_FILE, JSON.stringify(messages), {
            encoding: 'utf-8',
        });
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)()
], MessageService);
//# sourceMappingURL=message.service.js.map