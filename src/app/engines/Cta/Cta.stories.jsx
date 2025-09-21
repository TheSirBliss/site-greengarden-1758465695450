// File: src/components/organisms/Cta/Cta.stories.jsx
import { Cta } from './Cta';

export default {
  title: 'Organisms/Cta',
  component: Cta,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Pronto a iniziare?',
    subtitle: 'Lancia il tuo prossimo progetto in pochi minuti. Nessuna carta di credito richiesta.',
  },
};