export {};

import 'source-map-support/register';
import {SQSEvent} from 'aws-lambda';
import lambdaLogger from 'lambda-log';
import * as processor from '../src/core/processor';

export const handleNotifications = async (event: SQSEvent, context) => {
    lambdaLogger.info('Notification handler triggered', context.awsRequestId);
    await processor.processSqsEvent(event);
    lambdaLogger.info('Process Completed', context.getRemainingTimeInMillis());
};
