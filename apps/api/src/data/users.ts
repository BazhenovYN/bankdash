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

export async function getUserProfile(prisma: PrismaClient, user: User) {
  const profile = await prisma.userProfile.findUnique({
    select: {
      firstName: true,
      lastName: true,
      dateOfBirth: true,
      presentAddress: true,
      permanentAddress: true,
      city: true,
      postalCode: true,
      img: true,
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      country: {
        select: {
          name: true,
        },
      },
    },
    where: {
      userId: user.id,
    },
  });

  if (!profile) {
    throw new Error('User profile not found');
  }

  return {
    firstName: profile.firstName,
    lastName: profile.lastName,
    fullName: `${profile.firstName} ${profile.lastName}`,
    username: profile.user.name,
    email: profile.user.email,
    dateOfBirth: profile.dateOfBirth,
    presentAddress: profile.presentAddress,
    permanentAddress: profile.permanentAddress,
    city: profile.city,
    postalCode: profile.postalCode,
    country: profile.country.name,
    img: profile.img,
  };
}

export async function getUserAvatar(prisma: PrismaClient, user: User) {
  const profile = await prisma.userProfile.findUnique({
    select: {
      img: true,
    },
    where: {
      userId: user.id,
    },
  });

  if (!profile) {
    throw new Error('User profile not found');
  }

  return profile;
}

export async function getUserPreferences(prisma: PrismaClient, user: User) {
  const preferences = await prisma.userPreferences.findUnique({
    select: {
      timezone: true,
      sendOrReceiveCurrency: true,
      receiveMerchantOrder: true,
      recommendation: true,
      currency: {
        select: {
          code: true,
        },
      },
    },
    where: {
      userId: user.id,
    },
  });

  if (!preferences) {
    throw new Error('User preferences not found');
  }

  return {
    currency: preferences.currency.code,
    timezone: preferences.timezone,
    notifications: {
      sendOrReceiveCurrency: preferences.sendOrReceiveCurrency,
      receiveMerchantOrder: preferences.receiveMerchantOrder,
      recommendation: preferences.recommendation,
    },
  };
}

export async function getUserSecurityPreferences(prisma: PrismaClient, user: User) {
  const preferences = await prisma.userPreferences.findUnique({
    select: {
      twoFactorAuth: true,
    },
    where: {
      userId: user.id,
    },
  });

  if (!preferences) {
    throw new Error('User preferences not found');
  }

  return {
    twoFactorAuth: preferences.twoFactorAuth,
  };
}
