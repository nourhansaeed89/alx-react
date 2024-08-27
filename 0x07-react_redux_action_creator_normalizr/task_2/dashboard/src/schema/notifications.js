mport notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define schema entities for user, message, and notification
const userEntity = new schema.Entity('users');
const messageEntity = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);
const notificationEntity = new schema.Entity('notifications', {
  author: userEntity,
  context: messageEntity,
});

// Normalize the notifications data
const normalizedNotifications = normalize(notifications.default, [notificationEntity]);

// Function to get all notifications by user ID
export const fetchNotificationsByUser = (userId) => {
  const { notifications, messages } = normalizedNotifications.entities;
  const userNotifications = [];

  Object.values(notifications).forEach((notification) => {
    if (notification.author === userId) {
      userNotifications.push(messages[notification.context]);
    }
  });

  return userNotifications;
};

export { normalizedNotifications };
