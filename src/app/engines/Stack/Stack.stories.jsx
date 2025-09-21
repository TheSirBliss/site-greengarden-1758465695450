// File: src/components/atoms/Stack/Stack.stories.jsx
import { Stack } from './Stack';
import { Box } from '../Box/Box';

export default {
  title: 'Atoms/Layout/Stack',
  component: Stack,
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
    },
    spacing: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 6, 8],
    },
  },
};

const Template = (args) => (
  <Stack {...args}>
    <Box p="4" bg="brand.primary" color="ui.surface">Box 1</Box>
    <Box p="4" bg="brand.primary" color="ui.surface">Box 2</Box>
    <Box p="4" bg="brand.primary" color="ui.surface">Box 3</Box>
  </Stack>
);

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
  spacing: '4',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
  spacing: '4',
};