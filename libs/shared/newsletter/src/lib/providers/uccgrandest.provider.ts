import { INewsletterProvider } from '../newsletter-provider.interface';
import { faker } from '@faker-js/faker';
import axios from 'axios';

export class UccGrandEstProvider implements INewsletterProvider {
  async subscribe(email: string) {
    try {
      console.log('subscribing to UccGrandEstProvider newsletter');
      const params = new URLSearchParams();
      params.append('field-email', email);
      params.append('field-nom', faker.person.lastName());
      params.append('field-prenom', faker.person.firstName());
      params.append('field-structure', faker.company.name());
      params.append('field-fonction', faker.person.jobTitle());
      params.append('field-newsletter[]', "Je m'inscris à la newsletter de l'UCC Grand Est"); 

      return axios
        .post(
          'https://www.ucc-grandest.com/wp-json/contact-form-7/v1/contact-forms/250/feedback',
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
          console.log(response);
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
