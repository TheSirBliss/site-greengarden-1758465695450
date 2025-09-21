// File: src/components/molecules/TeamMemberCard/TeamMemberCard.stories.jsx
import { TeamMemberCard } from './TeamMemberCard';
import { Box } from '../../atoms/Box/Box';

const sampleMember = {
  name: 'Jane Doe',
  role: 'CEO & Founder',
  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  socialLinks: [
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' },
  ]
};

export default {
  title: 'Molecules/Marketing/TeamMemberCard',
  component: TeamMemberCard,
  decorators: [(Story) => <Box maxWidth="350px"><Story /></Box>],
};

export const Default = {
  args: {
    member: sampleMember,
  },
};

export const NoSocials = {
    args: {
      member: { ...sampleMember, socialLinks: [] },
    },
  };