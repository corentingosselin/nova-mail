import { INewsletterProvider } from '../newsletter-provider.interface';
import { sendRequest } from '../utils/http.utils';

export class DealabsProvider implements INewsletterProvider {
  async subscribe(email: string) {
    return await sendRequest(
      'https://links.iterable.com/lists/publicAddSubscriberForm?publicIdString=5f936da6-207d-496a-b24e-02f7026d6daa',
      {
        email,
      }
    );
  }
}
