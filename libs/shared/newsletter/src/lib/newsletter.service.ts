import { AldiProvider } from './providers/aldi.provider';
import { AmnestyProvider } from './providers/amnesty.provider';
import { VeilleActeurSanteProvider } from './providers/veilleacteursante.provider';
import { RadioFranceProvider } from './providers/radiofrance.provider';
import { UccGrandEstProvider } from './providers/uccgrandest.provider';
import { ZalandoProvider } from './providers/zalando.provider';
import { AltiViewProvider } from './providers/altiview.provider';
import { DealabsProvider } from './providers/dealabs.provider';
import { JeuConcoursProvider } from './providers/jeuconcours.provider';
import { ConforamaProvider } from './providers/conforama.provider';
import { GrouponProvider } from './providers/groupon.provider';

const PROVIDERS = {
  //zalando: ZalandoProvider,
  //amnesty: AmnestyProvider,
  //radiofrance: RadioFranceProvider
  //aldi: AldiProvider,
  //uccGrandEst: UccGrandEstProvider
  //veilleActeurSante: VeilleActeurSanteProvider
  //altiView: AltiViewProvider
  //dealabs: DealabsProvider,
  //jeuConcours: JeuConcoursProvider
  //conforama: ConforamaProvider
  groupon: GrouponProvider,
};

export function subscribe(email: string) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const subscriptionPromises = Object.entries(PROVIDERS).map(([key, value]) => {
    const provider = new value();
    console.log(`Subscribing to ${key} newsletter`);
    return provider.subscribe(email);
  });
  return Promise.all(subscriptionPromises);
}
