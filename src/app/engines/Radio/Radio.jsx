// File: src/components/atoms/Radio/Radio.jsx
import React from 'react';
import styled from 'styled-components';

const RadioContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

// L'input nativo viene nascosto, come per il Checkbox
const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

// Questo è il cerchio che l'utente vede
const StyledRadio = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: 50%; // La differenza chiave: è un cerchio
  transition: all 150ms;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.ui.background};

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.brand.primary}30;
  }
`;

// Il pallino interno che appare quando selezionato
const InnerCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brand.primary};
  visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
`;

const RadioLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing['space-2']};
`;

export const Radio = ({ name, value, checked, label, disabled, ...props }) => {
  return (
    <RadioContainer>
      <HiddenRadio
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <StyledRadio>
        <InnerCircle checked={checked} />
      </StyledRadio>
      {label && <RadioLabel>{label}</RadioLabel>}
    </RadioContainer>
  );
};