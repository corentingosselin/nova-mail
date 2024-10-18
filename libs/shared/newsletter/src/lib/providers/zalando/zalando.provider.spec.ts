import { ZalandoProvider } from '../zalando.provider';
import { faker } from '@faker-js/faker';

const randomEmail = faker.internet.email();

describe('ZalandoProvider', () => {
  let provider: ZalandoProvider;

  beforeEach(() => {
    provider = new ZalandoProvider();
  });

  it('should subscribe to the newsletter', async () => {
    const email = randomEmail;
    const result = await provider.subscribe(email);
    expect(result).toBe(true);
  });
});
