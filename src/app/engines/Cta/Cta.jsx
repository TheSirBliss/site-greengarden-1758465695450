// File: src/components/organisms/Cta/Cta.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Stack } from '../../atoms/Stack/Stack';
import { Typography } from '../../atoms/Typography/Typography';
import { CtaGroup } from '../../molecules/CtaGroup/CtaGroup';

export const Cta = ({ title, subtitle, ...props }) => {
  return (
    <Box as="section" p={{ _: '6', md: '8' }} bg="brand.primary" {...props}>
      <Stack
        direction={{ _: 'vertical', md: 'horizontal' }} // Verticale su mobile, orizzontale su desktop
        spacing={{ _: '6', md: '8' }}
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1200px"
        mx="auto"
      >
        {/* Sezione Testo */}
        <Stack spacing="2" color="ui.surface">
          <Typography as="h2" variant="h2">
            {title}
          </Typography>
          <Typography opacity="0.9">
            {subtitle}
          </Typography>
        </Stack>

        {/* Sezione Bottoni */}
        {/* Per questo CTA, modifichiamo al volo lo stile dei bottoni per adattarli allo sfondo scuro */}
        <Box
          sx={{
            // 'sx' è una prop speciale per stili custom
            // Cambiamo lo stile dei bottoni solo dentro questo componente
            button: {
              backgroundColor: 'ui.surface',
              color: 'brand.primary',
              '&:hover': {
                backgroundColor: 'neutral.gray-100',
              }
            }
          }}
        >
          <CtaGroup />
        </Box>
      </Stack>
    </Box>
  );
};