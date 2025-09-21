// File: src/components/molecules/TeamMemberCard/TeamMemberCard.jsx
import React from 'react';
import { Stack } from '../../atoms/Stack/Stack';
import { Typography } from '../../atoms/Typography/Typography';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { IconButton } from '../../atoms/IconButton/IconButton';
import { Box } from '../../atoms/Box/Box';

export const TeamMemberCard = ({ member, ...props }) => {
  const { name, role, imageUrl, socialLinks = [] } = member;

  return (
    <Stack
      spacing="4"
      alignItems="center"
      textAlign="center"
      p="6"
      bg="ui.surface"
      borderRadius="lg"
      boxShadow="shadow-md"
      {...props}
    >
      <Avatar src={imageUrl} name={name} size={96} />
      <Stack spacing="1">
        <Typography as="h3" variant="h3">{name}</Typography>
        <Typography variant="body" color="brand.primary">{role}</Typography>
      </Stack>
      
      {socialLinks.length > 0 && (
        <Stack direction="horizontal" spacing="3">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              {/* Qui dovresti avere icone social vere nel tuo atomo Icon */}
              <IconButton iconName="info" label={link.name} />
            </a>
          ))}
        </Stack>
      )}
    </Stack>
  );
};