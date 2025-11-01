import type { INotification } from "../model/INotification";

export interface INotificationFactory {
    createNotification(): INotification;
}

