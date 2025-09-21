// File: src/components/molecules/PricingCard/PricingCard.stories.jsx
import { PricingCard } from './PricingCard';
import { Box } from '../../atoms/Box/Box';

const samplePlan = {
  name: 'Pro',
  price: '€29',
  description: 'Per professionisti e piccoli team.',
  features: ['10 Progetti', '50GB di Storage', 'Analytics Avanzate', 'Supporto Prioritario'],
  ctaLabel: 'Scegli Pro',
};

export default {
  title: 'Molecules/Marketing/PricingCard',
  component: PricingCard,
  decorators: [(Story) => <Box maxWidth="380px" p="6"><Story /></Box>],
};

export const Default = {
  args: {
    plan: samplePlan,
  },
};

export const Featured = {
  args: {
    plan: samplePlan,
    isFeatured: true,
  },
};