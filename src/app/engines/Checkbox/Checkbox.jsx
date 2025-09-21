// File: src/components/atoms/Checkbox/Checkbox.jsx
import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

// L'input nativo viene nascosto ma rimane funzionale e accessibile
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

// Questo è il box che l'utente vede e con cui interagisce
const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: ${({ theme }) => theme.borders.radii.sm};
  transition: all 150ms;
  background: ${({ checked, theme }) => (checked ? theme.colors.brand.primary : theme.colors.ui.background)};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.brand.primary}30;
  }

  // Aggiungiamo l'icona di spunta (SVG) quando è checked
  svg {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

const CheckboxLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing['space-2']};
`;

export const Checkbox = ({ checked, label, disabled, ...props }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} disabled={disabled} {...props} />
      <StyledCheckbox checked={checked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </StyledCheckbox>
      {label && <CheckboxLabel>{label}</CheckboxLabel>}
    </CheckboxContainer>
  );
};