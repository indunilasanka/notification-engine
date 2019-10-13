export {};

import 'cross-fetch/polyfill';
import gql from 'graphql-tag';
import AWSAppSyncClient from 'aws-appsync';
import lambdaLogger from 'lambda-log';
import {AUTH_TYPE} from 'aws-appsync/lib/link/auth-link';
import {createNotification} from './queries/mutation';

const config = {
    REGION: process.env.REGION as string,
    API_KEY: process.env.API_KEY as string,
    API_ID: process.env.API_ID as string,
    ENDPOINT: process.env.GRAPHQL_ENDPOINT as string,
    AUTHENTICATION_TYPE: process.env.AUTHENTICATION_TYPE as string,
};

const client = new AWSAppSyncClient({
    url: config.ENDPOINT,
    region: config.REGION,
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: config.API_KEY,
    },
    disableOffline: true,
});

export const createNotifications = async (notification: Notification) => {
    try {
        await client.hydrated();
        const params = {
            recipient: notification.recipient,
            sender: notification.sender,
            notificationType: notification.notificationType,
            ask: notification.ask,
            skill: notification.skill,
            recommendedUser: notification.recommendedUser,
            isRead: notification.isRead,
            isDeleted: notification.isDeleted,
            action: notification.action,
        };

        const result = await client.mutate({
            mutation: gql(createNotification),
            variables: params,
        });
        lambdaLogger.info(result.data);
    } catch (e) {
        lambdaLogger.error('Error occurred when saving notification data through the graphql endpoint', e);
    }
};
