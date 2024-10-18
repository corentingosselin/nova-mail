import { INewsletterProvider } from '../newsletter-provider.interface';
import { sendRequest } from '../utils/http.utils';

export class GrouponProvider implements INewsletterProvider {
  async subscribe(email: string) {
    return await sendRequest(
      'https://www.groupon.fr/app/subscriptions/',
      {
        email_address: email,
        double_optin: '',
        platform: 'web',
        _csrf: '',
        sub_modal_version: 'overlay_modal',
      },
      undefined,
      200,
      true
    );
  }
}
