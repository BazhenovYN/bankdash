import autoLoad from '@fastify/autoload';
import fastify from 'fastify';
import { dirname, join } from 'node:path';
import { env } from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const host = env.HOST ?? 'localhost';
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
