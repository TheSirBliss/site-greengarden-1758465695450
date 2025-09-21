// File: src/components/organisms/Header/Header.stories.jsx
import { Header } from './Header';

const sampleLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '#about' },
];

export default {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    // Rimuoviamo il padding di default di Storybook per vedere l'header a larghezza piena
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    logoSrc: 'https://via.placeholder.com/150x40.png?text=LOGO', // Un logo placeholder
    links: sampleLinks,
    activeLink: '#features',
  },
};