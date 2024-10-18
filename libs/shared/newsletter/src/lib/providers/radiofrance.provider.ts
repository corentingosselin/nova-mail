import { INewsletterProvider } from '../newsletter-provider.interface';
import { faker } from '@faker-js/faker';
import axios from 'axios';

const URL = 'https://www.radiofrance.fr/api/newsletters/subscribe';

const NEWSLETTER_IDS = [
  '2b87f964-55d8-4ab0-8be8-e3f03c5a495e',
  'ece3bd49-7190-4c0a-b958-0238274ac145',
  '1f14af5c-e1a1-4f06-a41a-9b2dbee473bb',
  '094f67ae-38f9-4570-ba27-f948eda28f30',
  'ecc9eb25-6011-4204-9494-f471d3e460da',
  '840c3805-4b73-4ca3-ace7-88155c370450',
];

export class RadioFranceProvider implements INewsletterProvider {
  async subscribe(email: string) {
    try {
      return axios
        .put(
          URL,
          {
            mail: email,
            newsletters: NEWSLETTER_IDS,
            campagneType: 'Landing',
            campagneTitle: 'Web_franceculture_newsletters',
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
          return response.status === 200 && response.data.subscribed;
        })
        .catch(() => {
          return false;
        });
    } catch (error) {
      console.error(`[${this.constructor.name} / SUBSCRIBE] error:`, error);
      throw error;
    }
  }
}
