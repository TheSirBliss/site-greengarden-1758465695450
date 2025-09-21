// File: src/components/atoms/Tooltip/Tooltip.jsx
import React from 'react';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 140px;
  background-color: ${({ theme }) => theme.colors.neutral['gray-900']};
  color: ${({ theme }) => theme.colors.ui.surface};
  text-align: center;
  border-radius: ${({ theme }) => theme.borders.radii.md};
  padding: ${({ theme }) => theme.spacing['space-2']};
  
  position: absolute;
  z-index: 1;
  bottom: 125%; // Posizionato sopra l'elemento
  left: 50%;
  margin-left: -70px; // Per centrarlo
  
  opacity: 0;
  transition: opacity 0.3s;

  // Freccia del tooltip
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.neutral['gray-900']} transparent transparent transparent;
  }
`;

// Mostra il tooltip al passaggio del mouse
const TooltipContainer = styled.div`
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Tooltip = ({ children, text }) => {
  return (
    <TooltipContainer>
      {children}
      <TooltipText>{text}</TooltipText>
    </TooltipContainer>
  );
};