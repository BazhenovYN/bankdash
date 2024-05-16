import { currentUser } from '@/mocks/users';
import { User } from '@/types';

export const getUser = async (): Promise<User> => {
  return currentUser;
};
