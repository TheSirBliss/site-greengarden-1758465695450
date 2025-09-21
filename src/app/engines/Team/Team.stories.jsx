// File: src/components/organisms/Team/Team.stories.jsx
import { Team } from './Team';

const sampleMembers = [
    {
        name: 'Jane Doe',
        role: 'CEO & Founder',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        socialLinks: [{ name: 'Twitter', url: '#' }, { name: 'LinkedIn', url: '#' }]
    },
    {
        name: 'John Smith',
        role: 'CTO',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        socialLinks: [{ name: 'GitHub', url: '#' }]
    },
    {
        name: 'Emily White',
        role: 'Lead Designer',
        imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        socialLinks: [{ name: 'Dribbble', url: '#' }]
    },
];

export default {
  title: 'Organisms/Team',
  component: Team,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Il Team Dietro al Progetto',
    subtitle: 'Siamo un gruppo di designer, sviluppatori e strateghi appassionati di ciò che facciamo.',
    members: sampleMembers,
  },
};