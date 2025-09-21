// File: src/components/atoms/Box/Box.stories.jsx
import { Box } from './Box';

export default {
  title: 'Atoms/Layout/Box',
  component: Box,
  argTypes: {
    p: { control: 'text', description: 'Padding (es. 2, 3, 4)'},
    m: { control: 'text', description: 'Margin (es. 2, 3, 4)'},
    bg: { control: 'color', description: 'Background Color' },
    width: { control: 'text', description: 'Width (es. 1/2, 256px)'}
  },
};

export const Default = {
  args: {
    children: 'Questo è un Box. Prova a cambiare le props nei Controls.',
    p: '4', // Padding basato su theme.spacing['space-4']
    bg: 'neutral.gray-100', // Colore di sfondo basato su theme.colors.neutral['gray-100']
    border: '1px solid',
    borderColor: 'ui.border',
    borderRadius: 'md',
    width: '100%',
  },
};