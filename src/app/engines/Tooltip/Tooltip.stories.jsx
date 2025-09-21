// File: src/components/atoms/Tooltip/Tooltip.stories.jsx
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

export default {
  title: 'Atoms/Feedback/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: 'text' },
  },
};

export const Default = {
  args: {
    text: 'Questa è un\'informazione utile!',
    children: (
      // Mettiamo un div intorno al bottone disabilitato per far funzionare l'hover
      <div>
        <Button>Passa il mouse qui</Button>
      </div>
    ),
  },
  // Aggiungiamo un po' di padding alla storia per visualizzare meglio il tooltip
  decorators: [(Story) => <div style={{ paddingTop: '50px', textAlign: 'center' }}><Story /></div>],
};