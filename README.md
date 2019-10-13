# Notification Service

Notification Service @ZippyCrowd 

### Usage

Enter the new directory

``` bash
$ cd my-project
```

Install the Node.js packages

``` bash
$ npm install
```

Run application offline

Run dynamoDB on docker

``` bash
$ docker pull instructure/dynamo-local-admin
$ docker run -d -p 8000:8000 -it --rm instructure/dynamo-local-admin
```
        
Run serverless offline

``` bash
```

Deploy your project

Update REGION, ACCT_ID, ASK_TABLE, SKILL_TABLE, USER_TABLE fields in the env.yml file

``` bash
$ serverless deploy -s env[dev]
```

Update GraphQl endpoint and api-key env variables in the lambda function[notification-handler]. Values for them will be returned from the stack output
Insert static notification-types[file: resources/notificationTypesData.json] into the notification-types table. 
These are one time configurations, Once stack is created you have to update the notification-handler function and the notification-types table.

#### Run Lint

Run your lint checks using

``` bash
$ yarn run lint
```

#### Run Tests

Run your tests using

``` bash
$ yarn run test
```

### GraphQL Queries

#### Query: getNotificationById

```
getNotificationById(id: $id, createdAt: $createdAt) {
    id
    createdAt
    isDeleted
    isRead
    notificationType {
      id
      name
      template
    }
    recipient {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    sender {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    recommendedUser {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    ask {
      id
      skill
      location
      description
      findBy
    }
    skill {
      id
      name
    }
    action
}
  
Variables: 
{
    "id": "199785b3-1ed4-4a60-a325-615421114c52",
    "createdAt": "2019-09-18T03:51:09.721Z"
}
```

#### Query: getNotificationsByRecipient

```
getNotificationsByRecipient(recipient: $recipient) {
    id
    createdAt
    isDeleted
    isRead
    notificationType {
      id
      name
      template
    }
    recipient {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    sender {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    recommendedUser {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    ask {
      id
      skill
      location
      description
      findBy
    }
    skill {
      id
      name
    }
    action
}

Variables: 
{
    "recipient": "12345"
}
```

#### Subscription: createdNotification

```
createdNotification {
    id
    createdAt
    isDeleted
    isRead
    notificationType {
      id
      name
      template
    }
    recipient {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    sender {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    recommendedUser {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    ask {
      id
      skill
      location
      description
      findBy
    }
    skill {
      id
      name
    }
    action
}
```

#### Subscription: createdNotificationByRecipient

```
createdNotificationByRecipient (recipient: $recipient) {
    id
    createdAt
    isDeleted
    isRead
    notificationType {
      id
      name
      template
    }
    recipient {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    sender {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    recommendedUser {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    ask {
      id
      skill
      location
      description
      findBy
    }
    skill {
      id
      name
    }
    action
}
```

#### Mutation : updateNotification

```
updateNotification (id: $id, action: $action, isDeleted: $isDeleted, isRead: $isRead) {
    id
    createdAt
    isDeleted
    isRead
    notificationType {
      id
      name
      template
    }
    recipient {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    sender {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    recommendedUser {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    ask {
      id
      skill
      location
      description
      findBy
    }
    skill {
      id
      name
    }
    action
}
```

#### Mutation : deleteNotification

```
deleteNotification (id: $id) {
    id
    createdAt
    isDeleted
    isRead
    notificationType {
      id
      name
      template
    }
    recipient {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    sender {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    recommendedUser {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    ask {
      id
      skill
      location
      description
      findBy
    }
    skill {
      id
      name
    }
    action
}
```

#### Mutation : readNotification

```
readNotification (id: $id) {
    id
    createdAt
    isDeleted
    isRead
    notificationType {
      id
      name
      template
    }
    recipient {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    sender {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    recommendedUser {
      userId
      email
      firstName
      lastName
      profileImageUrl
    }
    ask {
      id
      skill
      location
      description
      findBy
    }
    skill {
      id
      name
    }
    action
}
```
