// File: src/components/atoms/Avatar/Avatar.jsx
import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borders.radii.full};
  background-color: ${({ theme }) => theme.colors.neutral['gray-300']};
  color: ${({ theme }) => theme.colors.neutral['gray-900']};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  overflow: hidden;
  position: relative;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  font-size: ${({ size }) => size / 2.5}px; // Dimensione del font proporzionale alla size

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const getInitials = (name) => {
  if (!name) return '';
  const parts = name.split(' ');
  if (parts.length > 1) {
    return parts[0][0] + parts[1][0];
  }
  return parts[0][0];
};

export const Avatar = ({ src, name, size = 40, ...props }) => {
  const initials = getInitials(name).toUpperCase();
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    setImageError(false); // Reset error on src change
  }, [src]);

  return (
    <StyledAvatar size={size} {...props}>
      {src && !imageError ? (
        <img src={src} alt={name || 'Avatar'} onError={() => setImageError(true)} />
      ) : (
        <span>{initials}</span>
      )}
    </StyledAvatar>
  );
};