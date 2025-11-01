import type { INotification } from "../model/INotification";
import { NotificationEmail, NotificationPush, NotificationSMS } from "../model/NotificationImpl";
import type { INotificationFactory } from "./INotificationFactory";

export class EmailNotificationFactory implements INotificationFactory {
    public createNotification(): INotification {
        return new NotificationEmail();
    }
}

export class SMSNotificationFactory implements INotificationFactory {
    createNotification(): INotification {
        return new NotificationSMS();
    }
}

export class PushNotificationFactory implements INotificationFactory {
    createNotification(): INotification {
        return new NotificationPush();
    }
}
