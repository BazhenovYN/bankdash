import autoLoad from '@fastify/autoload';
import fastify from 'fastify';
import { join } from 'node:path';
import { env } from 'node:process';

import prisma from './lib/prisma';

const host = env.HOST ?? '0.0.0.0';
const port = env.PORT ? Number(env.PORT) : 4000;

const server = fastify({
  logger: true,
  ignoreTrailingSlash: true,
  maxParamLength: 5000,
});

server.register(autoLoad, {
  dir: join(__dirname, 'plugins'),
});

server.register(autoLoad, {
  dir: join(__dirname, 'routes'),
});

const start = async () => {
  try {
    await server.listen({ port, host });
    server.log.info(`Server listening on http://${host}:${port}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();

async function closeGracefully(signal: NodeJS.Signals) {
  server.log.info(`Received signal to terminate: ${signal}`);

  await server.close();
  await prisma.$disconnect();

  process.kill(process.pid, signal);
}

process.once('SIGINT', closeGracefully);
process.once('SIGTERM', closeGracefully);
