// File: src/components/molecules/FooterLinkList/FooterLinkList.stories.jsx
import { FooterLinkList } from './FooterLinkList';
import { Box } from '../../atoms/Box/Box';

const sampleLinks = [
    { label: 'Chi Siamo', href: '#' },
    { label: 'Lavora con noi', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contatti', href: '#' },
];

export default {
  title: 'Molecules/Navigation/FooterLinkList',
  component: FooterLinkList,
  decorators: [(Story) => <Box bg="neutral.gray-900" p="4" width="200px"><Story /></Box>]
};

export const Default = {
  args: {
    title: 'Azienda',
    links: sampleLinks,
  },
};