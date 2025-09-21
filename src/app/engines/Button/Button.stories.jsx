// File: src/components/atoms/Button/Button.stories.jsx
import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['primary', 'secondary'] },
    disabled: { control: { type: 'boolean' } },
    children: { control: 'text' },
  },
};

export const Primary = { args: { variant: 'primary', children: 'Primary Button' } };
export const Secondary = { args: { variant: 'secondary', children: 'Secondary Button' } };
export const Disabled = { args: { variant: 'primary', children: 'Disabled', disabled: true } };