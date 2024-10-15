import { subscribe } from '@nova-mail/newsletter';
import { FastifyInstance } from 'fastify';

interface SubscribePayload {
  email: string;
}

const subscribeSchema = {
  body: {
    type: 'object',
    required: ['email'],
    properties: {
      email: { type: 'string', format: 'email' },
    },
  },
};

export default async function (fastify: FastifyInstance) {
  fastify.post<{ Body: SubscribePayload }>(
    '/subscribe',
    {
      schema: subscribeSchema,
    },
    async (request, reply) => {
      const { email } = request.body;
      
      // Validate the email format
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return reply.status(400).send({ error: 'Invalid email format' });
      }

      return await subscribe(email);
    }
  );
}
