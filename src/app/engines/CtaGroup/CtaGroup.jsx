// File: src/components/moleacles/CtaGroup/CtaGroup.jsx
import React from 'react';
import { Stack } from '../../atoms/Stack/Stack';
import { Button } from '../../atoms/Button/Button';

// Un'altra molecola semplice che combina Stack e Button
export const CtaGroup = ({ ...props }) => {
  return (
    <Stack direction="horizontal" spacing="3" {...props}>
      <Button variant="secondary">Login</Button>
      <Button variant="primary">Sign Up</Button>
    </Stack>
  );
};