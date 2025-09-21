// File: src/components/molecules/NavMenu/NavMenu.stories.jsx
import { NavMenu } from './NavMenu';

const sampleLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '#about' },
];

export default {
  title: 'Molecules/Navigation/NavMenu',
  component: NavMenu,
  argTypes: {
    activeLink: {
      control: { type: 'select' },
      options: sampleLinks.map(l => l.href),
    },
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
};

export const Horizontal = {
  args: {
    links: sampleLinks,
    activeLink: '#features',
    direction: 'horizontal',
  },
};

export const Vertical = {
  args: {
    links: sampleLinks,
    activeLink: '#',
    direction: 'vertical',
  },
};