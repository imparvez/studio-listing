import React from 'react';

import Button from '@mui/material/Button';

interface CustomButtonProps {
  buttonText?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ buttonText = 'Click Me' }) => {
  return <Button variant="contained">{buttonText}</Button>;
};