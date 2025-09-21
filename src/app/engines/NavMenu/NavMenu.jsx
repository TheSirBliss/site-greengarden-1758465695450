// File: src/components/molecules/NavMenu/NavMenu.jsx
import React from 'react';
import { Stack } from '../../atoms/Stack/Stack';
import { NavLink } from '../../atoms/NavLink/NavLink';

// La Molecola è un "assemblatore" intelligente di Atomi
export const NavMenu = ({ links = [], activeLink = '', direction = 'horizontal', ...props }) => {
  return (
    <Stack as="nav" direction={direction} spacing="2" {...props}>
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          isActive={link.href === activeLink}
        >
          {link.label}
        </NavLink>
      ))}
    </Stack>
  );
};