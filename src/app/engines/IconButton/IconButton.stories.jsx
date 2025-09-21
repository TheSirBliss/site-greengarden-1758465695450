// File: src/components/atoms/IconButton/IconButton.stories.jsx
import { IconButton } from './IconButton';
import { Stack } from '../Stack/Stack';

export default {
  title: 'Atoms/Navigation/IconButton',
  component: IconButton,
  argTypes: {
    iconName: {
      control: { type: 'select' },
      options: ['info', 'check', 'x'],
    },
    iconSize: { control: { type: 'range', min: 16, max: 48, step: 4 } },
    label: { control: 'text' },
  },
};

export const Default = {
  args: {
    iconName: 'info',
    label: 'Informazioni',
  },
};

// Aggiungiamo un'icona 'menu' al nostro atomo Icon per questa demo
export const SocialIconsExample = () => (
    <Stack direction="horizontal" spacing="2">
        {/* Per fare questo esempio, dovresti aggiungere le icone 'twitter', 'github', etc. al tuo componente Icon */}
        <IconButton iconName="info" label="Twitter" />
        <IconButton iconName="info" label="GitHub" />
        <IconButton iconName="info" label="LinkedIn" />
    </Stack>
);
SocialIconsExample.storyName = 'Esempio di Icone Social';