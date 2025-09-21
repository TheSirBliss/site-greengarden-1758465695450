// File: src/components/organisms/Pricing/Pricing.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Grid } from '../../atoms/Grid/Grid';
import { Typography } from '../../atoms/Typography/Typography';
import { Stack } from '../../atoms/Stack/Stack';
import { PricingCard } from '../../molecules/PricingCard/PricingCard';

export const Pricing = ({ title, subtitle, plans = [], ...props }) => {
  return (
    <Box as="section" p={{ _: '6', md: '8' }} bg="neutral.gray-100" {...props}>
      <Stack
        spacing="8"
        maxWidth="1200px"
        mx="auto"
        alignItems="center"
        textAlign="center"
      >
        {/* Intestazione */}
        <Stack spacing="3">
          <Typography as="h2" variant="h2">{title}</Typography>
          <Typography variant="body" color="neutral.gray-500" fontSize="lg">{subtitle}</Typography>
        </Stack>

        {/* Griglia dei Piani */}
        <Grid
          width="100%"
          gridTemplateColumns={{ _: '1fr', md: `repeat(${plans.length}, 1fr)` }}
          gridGap="6"
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isFeatured={plan.isFeatured}
            />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};