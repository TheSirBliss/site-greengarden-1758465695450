// File: src/components/organisms/Features/Features.stories.jsx
import { Features } from './Features';

const sampleFeatures = [
  {
    iconName: 'check',
    title: 'Sviluppo Veloce',
    text: 'Crea e lancia in giorni, non mesi. La nostra libreria di componenti accelera il tuo workflow.',
  },
  {
    iconName: 'info',
    title: 'Intelligenza Artificiale',
    text: 'Sfrutta la potenza dell\'AI per generare layout, testi e design ottimizzati per la conversione.',
  },
  {
    iconName: 'x', // Esempio, idealmente useresti un'icona più appropriata
    title: 'Scalabilità Garantita',
    text: 'Costruito su un\'architettura moderna, il tuo sito è pronto a crescere insieme al tuo business.',
  },
];

export default {
  title: 'Organisms/Features',
  component: Features,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Tutto ciò di cui hai bisogno. Niente di superfluo.',
    subtitle: 'La nostra piattaforma è progettata per essere incredibilmente potente ma sorprendentemente semplice. Ecco perché ci amano.',
    features: sampleFeatures,
  },
};