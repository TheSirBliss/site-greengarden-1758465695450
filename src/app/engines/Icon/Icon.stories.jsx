// File: src/components/atoms/Icon/Icon.stories.jsx
import { Icon } from './Icon';
import { Box } from '../Box/Box'; // Usiamo Box per visualizzare le icone

export default {
  title: 'Atoms/Content/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['info', 'check', 'x'], // Le icone di esempio che abbiamo nel componente
      description: 'Nome dell\'icona da visualizzare',
    },
    size: { control: { type: 'range', min: 16, max: 64, step: 4 } },
    color: { control: 'color' },
  },
};

export const InfoIcon = {
  args: {
    name: 'info',
    size: 32,
    color: '#3b82f6', // theme.colors.brand.primary
  },
};

export const CheckIcon = {
  args: {
    name: 'check',
    size: 32,
    color: '#10b981', // theme.colors.brand.secondary
  },
};

export const CloseIcon = {
  args: {
    name: 'x',
    size: 32,
    color: '#ef4444', // theme.colors.feedback.error
  },
};

export const AllIcons = () => (
    <Box display="flex" gap="4">
        <Icon name="info" size={32} color="#3b82f6" />
        <Icon name="check" size={32} color="#10b981" />
        <Icon name="x" size={32} color="#ef4444" />
    </Box>
);
AllIcons.storyName = 'Tutte le icone di esempio';