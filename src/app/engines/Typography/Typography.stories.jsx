// File: src/components/atoms/Typography/Typography.stories.jsx
import { Typography } from './Typography';
import { Box } from '../Box/Box'; // Per raggruppare gli esempi

export default {
  title: 'Atoms/Content/Typography',
  component: Typography,
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'body', 'caption'],
    },
    as: {
      control: 'text',
      description: 'Sovrascrive il tag HTML (es. "span", "div")',
    },
    color: { control: 'color', description: 'Colore del testo, sovrascrive quello del tema' }
  },
};

export const Heading1 = {
  args: {
    children: 'Titolo Principale (H1)',
    variant: 'h1',
    as: 'h1',
  },
};

export const Heading2 = {
  args: {
    children: 'Sottotitolo (H2)',
    variant: 'h2',
    as: 'h2',
  },
};

export const Heading3 = {
  args: {
    children: 'Piccolo Titolo (H3)',
    variant: 'h3',
    as: 'h3',
  },
};

export const BodyText = {
  args: {
    children: 'Questo è un esempio di testo del corpo. Usa il variant "body" per i paragrafi standard e i testi lunghi.',
    variant: 'body',
  },
};

export const CaptionText = {
  args: {
    children: 'Testo di didascalia o ausiliario. Ideale per note a piè di pagina o informazioni secondarie.',
    variant: 'caption',
  },
};

export const CustomColor = {
    args: {
        children: 'Testo con colore personalizzato.',
        variant: 'body',
        color: '#ff0000', // Esempio di colore personalizzato (rosso)
    }
}

export const AllTypography = () => (
    <Box p="4">
        <Typography variant="h1">Titolo del Sito</Typography>
        <Typography variant="h2">Sezione Importante</Typography>
        <Typography variant="h3">Sottosezione</Typography>
        <Typography variant="body">
            Questo è un paragrafo di testo standard. Usiamo questo per la maggior parte dei contenuti.
            È leggibile e coerente grazie al nostro Design System.
        </Typography>
        <Typography variant="caption">
            Questa è una piccola didascalia o un testo ausiliario. Non usatelo per testi lunghi.
        </Typography>
        <Typography variant="body" color="brand.primary">
            Testo con colore primario del brand.
        </Typography>
    </Box>
);
AllTypography.storyName = 'Tutta la Tipografia';