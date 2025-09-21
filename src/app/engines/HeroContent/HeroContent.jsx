// File: src/components/molecules/HeroContent/HeroContent.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Typography } from '../../atoms/Typography/Typography';
import { CtaGroup } from '../CtaGroup/CtaGroup';
import { Stack } from '../../atoms/Stack/Stack';

export const HeroContent = ({ title, subtitle, ...props }) => {
  return (
    <Stack
      spacing="6"
      alignItems={{ _: 'center', md: 'flex-start' }} // Centrato su mobile, a sinistra su desktop
      textAlign={{ _: 'center', md: 'left' }} // Centrato su mobile, a sinistra su desktop
      {...props}
    >
      <Stack spacing="4">
        <Typography as="h1" variant="h1">
          {title}
        </Typography>
        <Typography variant="body" color="neutral.gray-500" fontSize="lg">
          {subtitle}
        </Typography>
      </Stack>
      <CtaGroup />
    </Stack>
  );
};