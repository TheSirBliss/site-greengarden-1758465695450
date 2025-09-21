// File: src/components/atoms/Radio/Radio.stories.jsx
import { Radio } from './Radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Unselected = {
  args: {
    name: 'options',
    label: 'Opzione A',
    checked: false,
  },
};

export const Selected = {
  args: {
    name: 'options',
    label: 'Opzione B',
    checked: true,
  },
};