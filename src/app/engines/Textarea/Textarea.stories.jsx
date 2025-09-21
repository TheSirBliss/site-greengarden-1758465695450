// File: src/components/atoms/Textarea/Textarea.stories.jsx
import { Textarea } from './Textarea';

export default {
  title: 'Atoms/Textarea',
  component: Textarea,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    placeholder: 'Scrivi qui il tuo messaggio...',
  },
};

export const Error = {
  args: {
    placeholder: 'Textarea con errore',
    error: true,
  },
};

export const Disabled = {
  args: {
    placeholder: 'Textarea disabilitata',
    disabled: true,
  },
};