// File: src/components/atoms/Checkbox/Checkbox.stories.jsx
import { Checkbox } from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Unchecked = {
  args: {
    label: 'Accetta i termini',
    checked: false,
  },
};

export const Checked = {
  args: {
    label: 'Accetta i termini',
    checked: true,
  },
};

export const NoLabel = {
  args: {
    checked: false,
  },
};