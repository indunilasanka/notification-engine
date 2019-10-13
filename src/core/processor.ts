import lambdaLogger from 'lambda-log';
import {SQSEvent, SQSRecord} from 'aws-lambda';
import {NULL_STRING, UNDEFINED} from '../common/constants';
import * as graphqlClient from '../graphql/graphqlClient';

export const processSqsEvent = async (event: SQSEvent) => {
    try {
        const record: SQSRecord = event.Records.pop();
        const notificationMessage: any = JSON.parse(record.body);
        lambdaLogger.info(notificationMessage);
        if (Array.isArray(notificationMessage.recipient)) {
            const recipients: string [] = notificationMessage.recipient as string [];
            for (const recipientId of recipients) {
                const notification: Notification = {
                    recipient: recipientId,
                    notificationType: notificationMessage.notificationType,
                    sender: (typeof notificationMessage.sender === UNDEFINED) ? NULL_STRING : notificationMessage.sender,
                    ask: (typeof notificationMessage.ask === UNDEFINED) ? NULL_STRING : notificationMessage.ask,
                    skill: (typeof notificationMessage.skill === UNDEFINED) ? NULL_STRING : notificationMessage.skill,
                    recommendedUser: (typeof notificationMessage.recommendedUser === UNDEFINED) ? NULL_STRING : notificationMessage.recommendedUser,
                    isRead: false,
                    isDeleted: false,
                    action: NULL_STRING,
                };
                await graphqlClient.createNotifications(notification);
            }
        } else {
            const notification: Notification = {
                recipient: notificationMessage.recipient,
                notificationType: notificationMessage.notificationType,
                sender: (typeof notificationMessage.sender === UNDEFINED) ? NULL_STRING : notificationMessage.sender,
                ask: (typeof notificationMessage.ask === UNDEFINED) ? NULL_STRING : notificationMessage.ask,
                skill: (typeof notificationMessage.skill === UNDEFINED) ? NULL_STRING : notificationMessage.skill,
                recommendedUser: (typeof notificationMessage.recommendedUser === UNDEFINED) ? NULL_STRING : notificationMessage.recommendedUser,
                isRead: false,
                isDeleted: false,
                action: NULL_STRING,
            };
            await graphqlClient.createNotifications(notification);
        }
    } catch (e) {
        lambdaLogger.error('Error occurred when generating notification message from SQS event', e);
    }
};
