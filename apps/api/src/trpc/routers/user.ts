import {
  getUserAvatar,
  getUserPreferences,
  getUserProfile,
  getUserSecurityPreferences,
} from '@api/data';
import { protectedProcedure, router } from '../router';

export const userRouter = router({
  getProfile: protectedProcedure.query(async ({ ctx: { prisma, user } }) => {
    const profile = await getUserProfile(prisma, user);
    return profile;
  }),
  getAvatar: protectedProcedure.query(async ({ ctx: { prisma, user } }) => {
    const avatar = await getUserAvatar(prisma, user);
    return avatar;
  }),
  getPreferences: protectedProcedure.query(async ({ ctx: { prisma, user } }) => {
    const preferences = await getUserPreferences(prisma, user);
    return preferences;
  }),
  getSecurityPreferences: protectedProcedure.query(async ({ ctx: { prisma, user } }) => {
    const preferences = await getUserSecurityPreferences(prisma, user);
    return preferences;
  }),
});
