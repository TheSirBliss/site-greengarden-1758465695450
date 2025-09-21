// File: src/components/organisms/Pricing/Pricing.stories.jsx
import { Pricing } from './Pricing';

const samplePlans = [
  {
    name: 'Hobby',
    price: '€9',
    description: 'Per progetti personali e side-project.',
    features: ['1 Progetto', '10GB di Storage', 'Supporto Community'],
    ctaLabel: 'Inizia Ora',
  },
  {
    name: 'Pro',
    price: '€29',
    description: 'Per professionisti e piccoli team.',
    features: ['10 Progetti', '50GB di Storage', 'Analytics Avanzate', 'Supporto Prioritario'],
    ctaLabel: 'Scegli Pro',
    isFeatured: true,
  },
  {
    name: 'Business',
    price: '€79',
    description: 'Per aziende che necessitano di scalabilità.',
    features: ['Progetti Illimitati', 'Storage Illimitato', 'Utenti Team', 'Supporto Dedicato'],
    ctaLabel: 'Contattaci',
  },
];

export default {
  title: 'Organisms/Pricing',
  component: Pricing,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Un piano per ogni esigenza',
    subtitle: 'Scegli il piano perfetto per te e inizia a costruire oggi stesso. Semplice, trasparente e senza sorprese.',
    plans: samplePlans,
  },
};