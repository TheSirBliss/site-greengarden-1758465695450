// File: src/components/atoms/Label/Label.stories.jsx
import { Label } from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    children: { control: 'text' },
    htmlFor: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'Etichetta di Esempio',
    htmlFor: 'inputId',
  },
};