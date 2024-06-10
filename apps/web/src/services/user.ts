import { currentUser } from '@web/mocks/users';
import { User } from '@web/types';

export const getUser = async (): Promise<User> => {
  return currentUser;
};
