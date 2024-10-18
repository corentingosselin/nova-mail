import { INewsletterProvider } from '../newsletter-provider.interface';
import { sendRequest } from '../utils/http.utils';
import { faker } from '@faker-js/faker';

export class ConforamaProvider implements INewsletterProvider {
  async subscribe(email: string) {
    return await sendRequest(
      'https://cloud.e.conforama.ch/newsletter_fr',
      {
        Email: email,
        Salutation: 1,
        FirstName: faker.person.firstName(),
        LastName: faker.person.lastName(),
        Birthdate: '',
        day: '02',
        month: '03',
        year: '1998',
        submitted: 'true',
      },
      undefined,
      200,
      true
    );
  }
}
