// File: src/components/organisms/Features/Features.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Grid } from '../../atoms/Grid/Grid';
import { Typography } from '../../atoms/Typography/Typography';
import { FeatureItem } from '../../molecules/FeatureItem/FeatureItem';
import { Stack } from '../../atoms/Stack/Stack';

export const Features = ({ title, subtitle, features = [], ...props }) => {
  return (
    <Box as="section" p={{ _: '4', md: '8' }} bg="neutral.gray-100" {...props}>
      <Stack
        spacing="6"
        maxWidth="1200px"
        mx="auto"
        alignItems="center"
        textAlign="center"
      >
        {/* Intestazione della Sezione */}
        <Stack spacing="3">
          <Typography as="h2" variant="h2">
            {title}
          </Typography>
          <Typography variant="body" color="neutral.gray-500" fontSize="lg">
            {subtitle}
          </Typography>
        </Stack>

        {/* Griglia delle Features */}
        <Grid
          width="100%"
          gridTemplateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }} // 1 colonna mobile, 3 desktop
          gridGap="6" // Spazio tra le card
        >
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              iconName={feature.iconName}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};