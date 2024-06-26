import { FastifyJwtSignOptions, SignPayloadType } from '@fastify/jwt';

type Payload = {
  userId: string;
};

declare module 'fastify' {
  interface FastifyRequest {
    jwtVerify(): Promise<Payload>;
  }
  interface FastifyReply {
    jwtSign(payload: SignPayloadType, options?: FastifyJwtSignOptions): Promise<string>;
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: Payload;
  }
}
