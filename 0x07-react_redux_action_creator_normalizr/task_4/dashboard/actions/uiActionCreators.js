import {
  USER_LOGIN,
  USER_LOGOUT,
  SHOW_NOTIFICATION_DRAWER,
  CLOSE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

export const userLogin = (email, password) => {
  return {
    type: USER_LOGIN,
    payload: { email, password },
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const showNotificationDrawer = () => {
  return {
    type: SHOW_NOTIFICATION_DRAWER,
  };
};

export const closeNotificationDrawer = () => {
  return {
    type: CLOSE_NOTIFICATION_DRAWER,
  };
};
