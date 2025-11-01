import type { INotification } from "./INotification";

export class NotificationEmail implements INotification {
    public enviar(): void {
        alert('Enviando notificação por email');
    }
}

export class NotificationSMS implements INotification {
    enviar(): void {
        alert('Enviando notificação por SMS');
    }
}

export class NotificationPush implements INotification {
    enviar(): void {
        alert('Enviando notficação via Push');
    }
}


