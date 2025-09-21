// File: src/components/organisms/Footer/Footer.stories.jsx
import { Footer } from './Footer';

const sampleData = {
  brand: {
    name: 'WizMain',
    logoSrc: 'https://via.placeholder.com/150x40/cccccc/000000?text=WIZMAIN',
    description: 'La piattaforma definitiva per la creazione di siti web AI-powered.'
  },
  linkGroups: [
    { title: 'Prodotto', links: [{ label: 'Features', href: '#' }, { label: 'Pricing', href: '#' }, { label: 'Demo', href: '#' }] },
    { title: 'Azienda', links: [{ label: 'Chi Siamo', href: '#' }, { label: 'Lavora con Noi', href: '#' }, { label: 'Stampa', href: '#' }] },
    { title: 'Legale', links: [{ label: 'Privacy Policy', href: '#' }, { label: 'Termini di Servizio', href: '#' }] },
  ],
  socialLinks: [
    { name: 'Twitter', url: '#' }, { name: 'GitHub', url: '#' }, { name: 'LinkedIn', url: '#' }
  ]
};

export default {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    data: sampleData,
  },
};