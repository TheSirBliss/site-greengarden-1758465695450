// File: src/components/molecules/FooterLinkList/FooterLinkList.jsx
import React from 'react';
import { Stack } from '../../atoms/Stack/Stack';
import { Typography } from '../../atoms/Typography/Typography';
import { NavLink } from '../../atoms/NavLink/NavLink';

export const FooterLinkList = ({ title, links = [] }) => {
  return (
    <Stack spacing="4">
      <Typography as="h4" variant="caption" textTransform="uppercase" color="neutral.gray-500">
        {title}
      </Typography>
      <Stack as="ul" spacing="3" style={{ listStyle: 'none', padding: 0 }}>
        {links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </li>
        ))}
      </Stack>
    </Stack>
  );
};