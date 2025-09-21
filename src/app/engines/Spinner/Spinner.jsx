// File: src/components/atoms/Spinner/Spinner.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ size }) => size / 8}px solid ${({ theme }) => theme.colors.neutral['gray-300']};
  border-top-color: ${({ theme, color }) => color || theme.colors.brand.primary};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export const Spinner = ({ size = 32, color, ...props }) => {
  return <StyledSpinner size={size} color={color} {...props} />;
};