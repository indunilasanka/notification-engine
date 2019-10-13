export {};

import * as AWS from 'aws-sdk';
import {YAML} from 'yamljs';

export const config = YAML.load('./../../env.yml')[process.env.STAGE];

export const DynamoDB = new AWS.DynamoDB({
    region: config.REGION,
    endpoint: config.ENDPOINT,
});
