import { INewsletterProvider } from '../newsletter-provider.interface';
import { faker } from '@faker-js/faker';
import { sendRequest } from '../utils/http.utils';

export class AltiViewProvider implements INewsletterProvider {
  async subscribe(email: string) {
    return await sendRequest(
      'https://x47j.mj.am/wgt/x47j/gq5/subscribe?c=c675af24',
      {
        Email: email,
        Fields: [
          { ID: 125058, Value: faker.person.firstName() },
          { ID: 125059, Value: faker.person.lastName() },
          { ID: 360015, Value: faker.company.name() },
        ],
      }
    );
  }
}
