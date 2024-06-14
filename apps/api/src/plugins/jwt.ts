import '@fastify/jwt';

import jwt from '@fastify/jwt';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { env } from 'node:process';

import { JWT_Payload } from '@api/types';

const JWT_SECRET = env.JWT_SECRET ?? 'jwt';

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: JWT_Payload;
  }
}

export default fp(
  async function (fastify: FastifyInstance) {
    fastify.register(jwt, {
      secret: JWT_SECRET,
    });
  },
  {
    name: 'jwt',
    dependencies: [],
  }
);
