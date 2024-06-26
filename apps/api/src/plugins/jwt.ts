import jwt from '@fastify/jwt';
import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { env } from 'node:process';

const JWT_SECRET = env.JWT_SECRET ?? 'jwt';

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
