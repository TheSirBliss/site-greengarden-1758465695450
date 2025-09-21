// File: src/components/atoms/Switch/Switch.stories.jsx
import { Switch } from './Switch';

export default {
  title: 'Atoms/Switch',
  component: Switch,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Off = {
  args: {
    label: 'Notifiche Email',
    checked: false,
  },
};

export const On = {
  args: {
    label: 'Notifiche Email',
    checked: true,
  },
};