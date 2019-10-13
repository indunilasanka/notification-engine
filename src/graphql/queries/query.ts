export const getNotificationsByRecipient: string = `query GetNotificationsByRecipient($recipient: String!) {
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
}`;

export const getNotificationById = `query GetNotificationById($id: ID!, $createdAt: String!) {
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
}`;
