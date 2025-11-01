import React from 'react';
import type { INotificationFactory } from './features/notification/factory/INotificationFactory';
import {
    EmailNotificationFactory,
    SMSNotificationFactory,
    PushNotificationFactory
} from './features/notification/factory/NotificationFactories'; 

const FACTORY_MAP: { [key: string]: INotificationFactory } = {
    'email': new EmailNotificationFactory(),
    'sms': new SMSNotificationFactory(),
    'push': new PushNotificationFactory(),
};

const App: React.FC = () => {
    
    const handleEnviarNotificacao = (type: keyof typeof FACTORY_MAP) => {
        const factory = FACTORY_MAP[type];

        if (factory) {
            const notification = factory.createNotification();
            
            notification.enviar(); 
            
            alert(`Notificação do tipo ${type} enviada com sucesso!`);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Sistema de Notificações (Factory Method a Abstract Factory Method)</h1>
            <button onClick={() => handleEnviarNotificacao('email')}>
                Enviar E-mail
            </button>
            <button onClick={() => handleEnviarNotificacao('sms')} style={{ margin: '0 10px' }}>
                Enviar SMS
            </button>
            <button onClick={() => handleEnviarNotificacao('push')}>
                Enviar Push
            </button>
        </div>
    );
};

export default App;