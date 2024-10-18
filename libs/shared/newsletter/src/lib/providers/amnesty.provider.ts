import { INewsletterProvider } from '../newsletter-provider.interface';
import { faker } from '@faker-js/faker';
import axios from 'axios';

export class AmnestyProvider implements INewsletterProvider {
  async subscribe(email: string) {
    try {
      return axios
        .post(
          'https://www.amnesty.fr/api/newsletter',
          {
            Salutation: 'M',
            Email: email,
            FirstName: faker.person.firstName(),
            LastName: faker.person.lastName(),
            Phone: '',
            Code_Postal__c: faker.location.zipCode(),
            Optin_Actionaute_Newsletter_mensuelle__c: true,
            Optin_Refugies_et_migrants__c: true,
            Optin_torture_et_peine_de_mort__c: true,
            Optin_Liberte_expression__c: true,
            Optin_Crises_et_conflits_armes__c: true,
            Optin_Discriminations__c: true,
            Optin_Impunites_des_etats__c: true,
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
          return response.status === 204;
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
