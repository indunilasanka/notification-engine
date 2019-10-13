import {DynamoDB} from './setup';

const notificationParams = {
    TableName: process.env.NOTIFICATION_TABLE,
    Item: {
        id: {S: 'e35fe89f-a31d-4511-a292-7ad23b82e4ed'},
        createdAt: {S: '2019-09-18T10:59:37.640Z'},
        ask: {S: 'ask1000'},
        recipient:{S: '12345'},
        sender:{S: '12346'},
        notificationType: {S: '1000'},
        isDeleted: false,
        isRead: false,
    },
};

const notificationTypeParams = {
    TableName: process.env.NOTIFICATION_TYPE_TABLE,
    Item: {
        id: {S: '1000'},
        name: {S: 'RecommendationForAsk'},
        template: {S: '{sender} recommended you to {ask}'},
    },
};

const userParams1 = {
    TableName: process.env.USER_TABLE,
    Item: {
        userId: {S: '12345'},
        email: {S: 'test1@gmail.com'},
        firstName: {S: 'test1'},
        lastName: {S: 'test1'},
    },
};

const userParams2 = {
    TableName: process.env.USER_TABLE,
    Item: {
        userId: {S: '12346'},
        email: {S: 'test2@gmail.com'},
        firstName: {S: 'test2'},
        lastName: {S: 'test2'},
    },
};

const skillParams = {
    TableName: process.env.SKILL_TABLE,
    Item: {
        id: {S: 'sk1000'},
        name: {S: 'testSkill'},
    },
};

const askParams = {
    TableName: process.env.ASK_TABLE,
    Item: {
        id: {S: 'ask1000'},
        description: {S: 'testsDescription'},
        location: {S: 'testLocation'},
        skill: {S: 'sk1000'},
    },
};

const putItem = params => (
    new Promise((resolve, reject) => {
        DynamoDB.putItem(params, (err, data) => {
            if (err) {
                reject(err.toString());
            } else {
                resolve(data);
            }
        });
    })
);

export const putData = async () => {
    try {
        await (putItem(notificationParams));
        await (putItem(notificationTypeParams));
        await (putItem(userParams1));
        await (putItem(userParams2));
        await (putItem(askParams));
        await (putItem(skillParams));
    } catch (err) {
        throw new Error(`Error creating tables: ${err.message}`);
    }
};
