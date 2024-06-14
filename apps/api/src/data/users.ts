import { PrismaClient, User } from '@prisma/client';

import { getHash } from '@api/lib/crypt';

type CreateUserDto = {
  name: string;
  email: string;
  password: string;
};

const SALT_ROUNDS = 10;

export async function createUser(prisma: PrismaClient, dto: CreateUserDto): Promise<User> {
  const { name, email, password } = dto;

  const user = await getUserByEmail(prisma, email);

  if (user) {
    throw new Error('User already exists with this email');
  }

  const hash = await getHash(password, SALT_ROUNDS);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
      version: 1,
    },
  });

  return newUser;
}

export async function getUserByEmail(prisma: PrismaClient, email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}

export async function getUserById(prisma: PrismaClient, id: string): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
}
