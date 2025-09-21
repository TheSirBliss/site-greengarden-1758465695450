// File: src/components/atoms/Image/Image.stories.jsx
import { Image } from './Image';
import { Box } from '../Box/Box'; // Per incapsulare l'immagine

export default {
  title: 'Atoms/Content/Image',
  component: Image,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: { type: 'select' }, options: ['none', 'sm', 'md', 'lg', 'full'] },
  },
};

export const Default = {
  args: {
    src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Paesaggio montano',
    width: '300px',
    height: '200px',
  },
};

export const Rounded = {
  args: {
    src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Paesaggio montano arrotondato',
    width: '300px',
    height: '200px',
    borderRadius: 'lg',
  },
};

export const FullWidth = {
  args: {
    src: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    alt: 'Immagine a larghezza piena',
    width: '100%',
  },
  decorators: [(Story) => <Box width="500px"><Story /></Box>] // Limita la larghezza del contenitore per la demo
};