// File: src/components/atoms/Label/Label.jsx
import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.ui.text};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing['space-2']};
`;

export const Label = ({ children, htmlFor, ...props }) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  );
};