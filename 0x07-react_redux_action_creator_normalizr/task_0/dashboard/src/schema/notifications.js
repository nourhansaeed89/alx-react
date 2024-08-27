import notifications from '../../notifications.json';

export const getNotificationsByUser = (userId) => {
  return notifications.default
    .reduce((acc, notification) => {
      if (notification.author.id === userId) {
        acc.push(notification.context);
      }
      return acc;
    }, []);
};
