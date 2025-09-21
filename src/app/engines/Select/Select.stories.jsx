// File: src/components/atoms/Select/Select.stories.jsx
import { Select } from './Select';

const sampleOptions = [
  { value: 'op1', label: 'Opzione 1' },
  { value: 'op2', label: 'Opzione 2' },
  { value: 'op3', label: 'Opzione 3' },
];

export default {
  title: 'Atoms/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    options: sampleOptions,
    placeholder: 'Seleziona un valore...',
  },
};

export const Disabled = {
  args: {
    options: sampleOptions,
    placeholder: 'Seleziona un valore...',
    disabled: true,
  },
};