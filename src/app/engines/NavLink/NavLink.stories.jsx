// File: src/components/atoms/NavLink/NavLink.stories.jsx
import { NavLink } from './NavLink';
import { Stack } from '../Stack/Stack';

export default {
  title: 'Atoms/Navigation/NavLink',
  component: NavLink,
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    isActive: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    children: 'Home',
    isActive: false,
  },
};

export const Active = {
  args: {
    children: 'Features',
    isActive: true,
  },
};

export const MenuExample = () => (
    <Stack direction="horizontal" spacing="2" as="nav">
        <NavLink href="#" isActive>Home</NavLink>
        <NavLink href="#">Features</NavLink>
        <NavLink href="#">Pricing</NavLink>
        <NavLink href="#">About</NavLink>
    </Stack>
);
MenuExample.storyName = 'Esempio di Menu';