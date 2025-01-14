import { forwardRef, useState } from 'react';
import type { InputBaseProps } from '@mui/material';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputElement } from './styles';


export type IInputProps = InputBaseProps

const Input = forwardRef<HTMLInputElement, IInputProps>(({ type, ...props }, ref) => {
  const isPassword = type === 'password';
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputElement
      ref={ref}
      type={isPassword ? (showPassword ? 'text' : 'password') : type}
      endAdornment={
        isPassword && (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }
      {...props}
    />
  );
});

export default Input;
