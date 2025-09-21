// File: src/components/atoms/Badge/Badge.stories.jsx
import { Badge } from './Badge';

export default {
  title: 'Atoms/Feedback/Badge',
  component: Badge,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};

export const Info = {
  args: {
    variant: 'info',
    children: 'New',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Completed',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'Pending',
  },
};

export const Error = {
  args: {
    variant: 'error',
    children: 'Failed',
  },
};