import { INewsletterProvider } from '../newsletter-provider.interface';
import { sendRequest } from '../utils/http.utils';

export class JeuConcoursProvider implements INewsletterProvider {
  async subscribe(email: string) {
    return await sendRequest(
      'https://www.jeu-concours.biz/addnl.php',
      {
        email,
        NLQ: 'ok',
        NLH: 'ok',
      },
      undefined,
      200,
      true
    );
  }
}
