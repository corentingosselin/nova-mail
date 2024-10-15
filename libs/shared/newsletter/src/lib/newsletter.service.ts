import { ZalandoProvider } from './providers/zalando/zalando.provider';

const PROVIDERS = {
  zalando: ZalandoProvider,
};

export function subscribe(email: string) {
  console.log('Starting subscribe function');
  const subscriptionPromises = Object.entries(PROVIDERS).map(([key, value]) => {
    console.log(`Processing provider: ${key}`);
    const provider = new value();
    console.log(`Instantiated provider: ${provider.constructor.name}`);
    return provider.subscribe(email);
  });

  console.log('Subscription promises created:', subscriptionPromises);
  return Promise.all(subscriptionPromises);
}
