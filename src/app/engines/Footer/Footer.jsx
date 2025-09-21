// File: src/components/organisms/Footer/Footer.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Grid } from '../../atoms/Grid/Grid';
import { Stack } from '../../atoms/Stack/Stack';
import { Typography } from '../../atoms/Typography/Typography';
import { Image } from '../../atoms/Image/Image';
import { IconButton } from '../../atoms/IconButton/IconButton';
import { FooterLinkList } from '../../molecules/FooterLinkList/FooterLinkList';

export const Footer = ({ data, ...props }) => {
  const { brand, linkGroups = [], socialLinks = [] } = data;

  return (
    <Box as="footer" p={{ _: '6', md: '8' }} bg="neutral.gray-900" color="ui.surface" {...props}>
      <Stack spacing="8" maxWidth="1200px" mx="auto">
        {/* Sezione Superiore: Logo e Link */}
        <Grid 
          gridTemplateColumns={{ _: '1fr', md: '2fr 3fr' }} 
          gridGap={{ _: '8', md: '12' }}
        >
          {/* Colonna Brand */}
          <Stack spacing="4">
            <Image src={brand.logoSrc} alt={brand.name} height="40px" width="auto" />
            <Typography variant="caption">{brand.description}</Typography>
          </Stack>

          {/* Colonne Link */}
          <Grid 
            gridTemplateColumns={{ _: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} 
            gridGap={{ _: '6', md: '8' }}
          >
            {linkGroups.map((group) => (
              <FooterLinkList key={group.title} title={group.title} links={group.links} />
            ))}
          </Grid>
        </Grid>

        {/* Bordo separatore */}
        <Box height="1px" bg="neutral.gray-500" opacity="0.5" />

        {/* Sezione Inferiore: Copyright e Social */}
        <Stack
          direction={{ _: 'vertical', md: 'horizontal' }}
          spacing="4"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} {brand.name}. Tutti i diritti riservati.
          </Typography>
          <Stack direction="horizontal" spacing="3">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                <IconButton iconName="info" label={link.name} />
              </a>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};