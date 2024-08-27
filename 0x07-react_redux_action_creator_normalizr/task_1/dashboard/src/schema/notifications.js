mport notifications from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Function to retrieve notifications by user ID
export const fetchUserNotifications = (userId) => {
  return notifications.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
};

// Define schema entities
const userSchema = new schema.Entity('users');
const messageSchema = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);
const notificationSchema = new schema.Entity('notifications', {
  author: userSchema,
  context: messageSchema,
});

// Normalize the notifications data
const normalizedData = normalize(notifications.default, [notificationSchema]);

export { normalizedData };
