export const createdNotification: string = `subscription CreatedNotification {
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
}`;
