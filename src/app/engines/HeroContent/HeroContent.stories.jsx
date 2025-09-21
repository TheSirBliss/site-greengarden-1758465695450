// File: src/components/molecules/HeroContent/HeroContent.stories.jsx
import { HeroContent } from './HeroContent';
import { Box } from '../../atoms/Box/Box';

export default {
  title: 'Molecules/Marketing/HeroContent',
  component: HeroContent,
};

export const Default = {
  args: {
    title: 'Costruisci Siti Web Straordinari, Automaticamente',
    subtitle: 'La nostra piattaforma AI-powered ti permette di creare siti professionali in pochi minuti, non mesi. Inizia gratis e lancia la tua idea oggi stesso.',
  },
  decorators: [(Story) => <Box maxWidth="600px"><Story /></Box>],
};