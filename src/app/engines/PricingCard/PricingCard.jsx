// File: src/components/molecules/PricingCard/PricingCard.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Stack } from '../../atoms/Stack/Stack';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';
import { Icon } from '../../atoms/Icon/Icon';
import { Badge } from '../../atoms/Badge/Badge';

const FeatureListItem = ({ children }) => (
  <Stack direction="horizontal" spacing="3" alignItems="center">
    <Icon name="check" size={20} color="#10b981" />
    <Typography as="span" variant="body">{children}</Typography>
  </Stack>
);

export const PricingCard = ({ plan, isFeatured = false }) => {
  const { name, price, description, features = [], ctaLabel } = plan;

  return (
    <Stack
      spacing="6"
      p="6"
      bg="ui.surface"
      borderRadius="lg"
      border="1px solid"
      borderColor={isFeatured ? 'brand.primary' : 'ui.border'}
      boxShadow={isFeatured ? 'shadow-lg' : 'shadow-md'}
      position="relative"
    >
      {isFeatured && (
        <Box position="absolute" top="-16px" left="50%" transform="translateX(-50%)">
          <Badge variant="success">Più Popolare</Badge>
        </Box>
      )}

      {/* Info Piano */}
      <Stack spacing="4" textAlign="center">
        <Typography as="h3" variant="h3">{name}</Typography>
        <Box>
          <Typography as="span" fontSize="2.5rem" fontWeight="bold">{price}</Typography>
          <Typography as="span" color="neutral.gray-500">/mese</Typography>
        </Box>
        <Typography variant="caption">{description}</Typography>
      </Stack>

      {/* Lista Feature */}
      <Stack as="ul" spacing="3" style={{ listStyle: 'none', padding: 0 }}>
        {features.map((feature) => (
          <li key={feature}><FeatureListItem>{feature}</FeatureListItem></li>
        ))}
      </Stack>

      {/* Bottone CTA */}
      <Button variant={isFeatured ? 'primary' : 'secondary'} width="100%">{ctaLabel}</Button>
    </Stack>
  );
};