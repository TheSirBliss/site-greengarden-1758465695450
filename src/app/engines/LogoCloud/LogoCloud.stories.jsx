// File: src/components/organisms/LogoCloud/LogoCloud.stories.jsx
import { LogoCloud } from './LogoCloud';

// Useremo dei placeholder per i loghi. In un progetto reale, useresti i tuoi file.
const sampleLogos = [
  { src: 'https://via.placeholder.com/150x40/ccc/888?text=LOGO+1', alt: 'Partner 1' },
  { src: 'https://via.placeholder.com/150x40/ccc/888?text=LOGO+2', alt: 'Partner 2' },
  { src: 'https://via.placeholder.com/150x40/ccc/888?text=LOGO+3', alt: 'Partner 3' },
  { src: 'https://via.placeholder.com/150x40/ccc/888?text=LOGO+4', alt: 'Partner 4' },
  { src: 'https://via.placeholder.com/150x40/ccc/888?text=LOGO+5', alt: 'Partner 5' },
];

export default {
  title: 'Organisms/LogoCloud',
  component: LogoCloud,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Scelto dalla fiducia delle migliori aziende del mondo',
    logos: sampleLogos,
  },
};