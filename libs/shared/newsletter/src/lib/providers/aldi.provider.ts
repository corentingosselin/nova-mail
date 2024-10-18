import { INewsletterProvider } from '../newsletter-provider.interface';
import { faker } from '@faker-js/faker';
import axios from 'axios';

export class AldiProvider implements INewsletterProvider {
  async subscribe(email: string) {
    try {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('locale', 'fr_fr');

      return axios
        .post(
          'https://newsletter.b101901.kyma.shoot.live.k8s-hana.ondemand.com/sfmc/permission',
          params,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Accept: '*/*',
              'User-Agent': faker.internet.userAgent(),
            },
          }
        )
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
