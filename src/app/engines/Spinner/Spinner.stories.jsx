// File: src/components/atoms/Spinner/Spinner.stories.jsx
import { Spinner } from './Spinner';

export default {
  title: 'Atoms/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 128, step: 8 } },
    color: { control: 'color' },
  },
};

export const Default = {
  args: {
    size: 48,
  },
};

export const CustomColor = {
  args: {
    size: 48,
    color: '#10b981', // Il nostro colore "secondary"
  },
};