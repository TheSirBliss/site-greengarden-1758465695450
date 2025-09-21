// File: src/components/organisms/LogoCloud/LogoCloud.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Stack } from '../../atoms/Stack/Stack';
import { Typography } from '../../atoms/Typography/Typography';
import { Image } from '../../atoms/Image/Image';

export const LogoCloud = ({ title, logos = [], ...props }) => {
  return (
    <Box as="section" p={{ _: '6', md: '8' }} bg="ui.background" {...props}>
      <Stack
        spacing="6"
        maxWidth="1200px"
        mx="auto"
        alignItems="center"
        textAlign="center"
      >
        {/* Titolo della Sezione */}
        <Typography as="h3" variant="caption" textTransform="uppercase">
          {title}
        </Typography>

        {/* Contenitore dei Loghi */}
        <Stack
          direction="horizontal"
          spacing="8"
          flexWrap="wrap" // Permette ai loghi di andare a capo su schermi piccoli
          justifyContent="center"
          alignItems="center"
        >
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              height="40px" // Altezza fissa per uniformità
              sx={{
                filter: 'grayscale(100%)', // Effetto bianco e nero
                opacity: 0.6,
                transition: 'all 0.2s',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  opacity: 1,
                }
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};