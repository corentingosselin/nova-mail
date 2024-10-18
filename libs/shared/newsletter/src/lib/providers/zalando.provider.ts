import { INewsletterProvider } from '../newsletter-provider.interface';
import { faker } from '@faker-js/faker';
import axios from 'axios';

export class ZalandoProvider implements INewsletterProvider {
  async subscribe(email: string) {
    try {
      const query = [
        {
          id: '06fe5b50b4218612aa3fa8494df326aef7ff35a75a8563b3455bb53c15168872',
          variables: {
            input: {
              email,
              preference: {
                category: 'MEN',
                topics: [
                  { id: 'item_alerts', isEnabled: true },
                  { id: 'recommendations', isEnabled: true },
                  { id: 'follow_brand', isEnabled: true },
                  { id: 'offers_sales', isEnabled: true },
                  { id: 'fashion_fix', isEnabled: true },
                  { id: 'subscription_confirmations', isEnabled: true },
                  { id: 'stories', isEnabled: true },
                  { id: 'survey', isEnabled: true },
                ],
              },
              referrer: 'nl_subscription_page',
              clientMutationId: '1728749625515',
            },
          },
        },
      ];

      return axios
        .post('https://www.zalando.fr/api/graphql/', query, {
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
            'User-Agent': faker.internet.userAgent(),
          },
        })
        .then((response) => {
          return response.status === 200;
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
