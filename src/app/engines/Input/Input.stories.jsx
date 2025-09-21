// File: src/components/atoms/Input/Input.stories.jsx
import { Input } from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
  },
};

export const Default = {
  args: {
    placeholder: 'Input standard',
  },
};

export const Error = {
  args: {
    placeholder: 'Input con errore',
    error: true,
  },
};

export const Disabled = {
  args: {
    placeholder: 'Input disabilitato',
    disabled: true,
  },
};