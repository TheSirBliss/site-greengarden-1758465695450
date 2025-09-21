// File: src/components/atoms/Grid/Grid.stories.jsx
import { Grid } from './Grid';
import { Box } from '../Box/Box';

export default {
  title: 'Atoms/Layout/Grid',
  component: Grid,
  argTypes: {
    gridTemplateColumns: { control: 'text' },
    gridGap: { control: 'text' },
  },
};

export const Default = {
  args: {
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 colonne di larghezza uguale
    gridGap: '4', // Spazio tra gli elementi, basato su theme.spacing['space-4']
    children: (
      <>
        <Box p="4" bg="brand.secondary" color="ui.surface">Col 1</Box>
        <Box p="4" bg="brand.secondary" color="ui.surface">Col 2</Box>
        <Box p="4" bg="brand.secondary" color="ui.surface">Col 3</Box>
        <Box p="4" bg="brand.secondary" color="ui.surface">Col 4</Box>
        <Box p="4" bg="brand.secondary" color="ui.surface">Col 5</Box>
        <Box p="4" bg="brand.secondary" color="ui.surface">Col 6</Box>
      </>
    ),
  },
};