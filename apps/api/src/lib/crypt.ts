import bcrypt from 'bcrypt';

export const getHash = async (text: string, saltOrRounds: string | number) => {
  return bcrypt.hash(text, saltOrRounds);
};

export const comparePasswords = async (data: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(data, hash);
};
