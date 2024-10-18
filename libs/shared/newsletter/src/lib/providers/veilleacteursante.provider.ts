import { INewsletterProvider } from '../newsletter-provider.interface';
import { faker } from '@faker-js/faker';
import axios from 'axios';

export class VeilleActeurSanteProvider implements INewsletterProvider {
  async subscribe(email: string) {
    try {
      return axios
        .post(
          'https://uro4.mjt.lu/wgt/uro4/391/subscribe?c=1a1b3245',
          {
            Email: email,
            Fields: [
              { ID: 23065, Value: faker.person.firstName() },
              { ID: 23066, Value: faker.person.lastName() },
              { ID: 26939, Value: faker.company.name() },
              { ID: 26945, Value: faker.person.jobTitle() },
              { ID: 278881, Value: 'Financeur (AMO et AMC)' },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: '*/*',
              'User-Agent': faker.internet.userAgent(),
            },
          }
        )
        .then((response) => {
          return response.status === 200;
        })
        .catch((error) => {
          console.error(`[${this.constructor.name} / SUBSCRIBE] error:`, error);

          return false;
        });
    } catch (error) {
      console.error(`[${this.constructor.name} / SUBSCRIBE] error:`, error);
      throw error;
    }
  }
}
