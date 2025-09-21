// File: src/components/atoms/Avatar/Avatar.stories.jsx
import { Avatar } from './Avatar';
import { Box } from '../Box/Box'; // Per raggruppare gli esempi

export default {
  title: 'Atoms/Content/Avatar',
  component: Avatar,
  argTypes: {
    src: { control: 'text', description: 'URL dell\'immagine' },
    name: { control: 'text', description: 'Nome utente per le iniziali' },
    size: { control: { type: 'range', min: 24, max: 96, step: 8 } },
  },
};

export const WithImage = {
  args: {
    src: 'https://images.unsplash.com/photo-1534528171478-c03aeb2f93f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80',
    name: 'Jane Doe',
    size: 48,
  },
};

export const WithInitials = {
  args: {
    name: 'John Doe',
    size: 48,
  },
};

export const Small = {
  args: {
    name: 'JD',
    size: 32,
  },
};

export const Large = {
  args: {
    src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80',
    name: 'Elon Musk',
    size: 72,
  },
};

export const GroupOfAvatars = () => (
  <Box display="flex" alignItems="center" gap="2">
    <Avatar src="https://images.unsplash.com/photo-1534528171478-c03aeb2f93f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" name="Jane Doe" size={40} />
    <Avatar name="John Doe" size={40} />
    <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80" name="Elon Musk" size={40} />
  </Box>
);
GroupOfAvatars.storyName = 'Gruppo di Avatar';