export const createNotification: string = `mutation CreateNotification(
  $recipient: String!
  $notificationType: String!
  $sender: String
  $recommendedUser: String
  $ask: String
  $skill: String
  $action: String
  $isRead: Boolean
  $isDeleted: Boolean
) {
  createNotification(
    recipient: $recipient
    notificationType: $notificationType
    sender: $sender
    recommendedUser: $recommendedUser
    ask: $ask
    skill: $skill
    action: $action
    isRead: $isRead
    isDeleted: $isDeleted
  ) {
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
