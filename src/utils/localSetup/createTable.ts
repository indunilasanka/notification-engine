export {};
import {config, DynamoDB} from './setup';

const notificationTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'S',
        },
        {
            AttributeName: 'createdAt',
            AttributeType: 'S',
        },
        {
            AttributeName: 'recipient',
            AttributeType: 'S',
        },
    ],
    KeySchema: [
        {
            AttributeName: 'id',
            KeyType: 'HASH',
        },
        {
            AttributeName: 'createdAt',
            KeyType: 'RANGE',
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    TableName: config.NOTIFICATION_TABLE,
    GlobalSecondaryIndexes: [
        {
            IndexName: 'recipient-createdAt-index',
            KeySchema: [
                {
                    AttributeName: 'recipient',
                    KeyType: 'HASH',
                },
                {
                    AttributeName: 'createdAt',
                    KeyType: 'RANGE',
                },
            ],
            Projection: {
                ProjectionType: 'ALL',
            },
            ProvisionedThroughput: {
                ReadCapacityUnits: 1,
                WriteCapacityUnits: 1,
            },
        },
    ],
};

const notificationTypesTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'S',
        },
    ],
    KeySchema: [
        {
            AttributeName: 'id',
            KeyType: 'HASH',
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    TableName: config.NOTIFICATION_TYPE_TABLE,
};

const userTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'userId',
            AttributeType: 'S',
        },
    ],
    KeySchema: [
        {
            AttributeName: 'userId',
            KeyType: 'HASH',
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    TableName: config.USER_TABLE,
};

const skillTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'S',
        },
    ],
    KeySchema: [
        {
            AttributeName: 'id',
            KeyType: 'HASH',
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    TableName: config.SKILL_TABLE,
};

const askTable = {
    AttributeDefinitions: [
        {
            AttributeName: 'id',
            AttributeType: 'S',
        },
    ],
    KeySchema: [
        {
            AttributeName: 'id',
            KeyType: 'HASH',
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    TableName: config.ASK_TABLE,
};

const createTable = params => (
    new Promise((resolve, reject) => {
        DynamoDB.createTable(params, (err, data) => {
            if (err) {
                reject(err.toString());
            } else {
                resolve(data);
            }
        });
    })
);

console.log(process.env.STAGE);

const create = async () => {
    try {
        await (createTable(notificationTable));
        await (createTable(notificationTypesTable));
        await (createTable(userTable));
        await (createTable(askTable));
        await (createTable(skillTable));
    } catch (err) {
        throw new Error(`Error creating tables: ${err.message}`);
    }
};

create();
