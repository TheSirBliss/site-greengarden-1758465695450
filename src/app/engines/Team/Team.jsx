// File: src/components/organisms/Team/Team.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Grid } from '../../atoms/Grid/Grid';
import { Typography } from '../../atoms/Typography/Typography';
import { Stack } from '../../atoms/Stack/Stack';
import { TeamMemberCard } from '../../molecules/TeamMemberCard/TeamMemberCard';

export const Team = ({ title, subtitle, members = [], ...props }) => {
  return (
    <Box as="section" p={{ _: '6', md: '8' }} bg="ui.background" {...props}>
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

        {/* Griglia dei Membri */}
        <Grid
          width="100%"
          gridTemplateColumns={{ _: '1fr', sm: 'repeat(2, 1fr)', lg: `repeat(${Math.min(members.length, 4)}, 1fr)` }}
          gridGap="6"
        >
          {members.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};