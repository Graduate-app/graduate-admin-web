import { Button as MuiButton } from '@mui/material';
import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { handleNumberStringPixelValue } from '@utils';


export interface IButtonProps {
  $minWidth?: number | string;
  $maxWidth?: number | string;
  $width?: number | string;
  $color?: string;
  $backgroundColor?: string;
}

const Button = styled(MuiButton).attrs({
  disableElevation: true,
})<IButtonProps>`
  && {
    text-transform: none;
    font-size: 16px;
    color: ${({ $color }) => $color || 'white'};
    min-width: ${({ $minWidth }) => handleNumberStringPixelValue($minWidth)};
    max-width: ${({ $maxWidth }) => handleNumberStringPixelValue($maxWidth)};
    width: ${({ $width }) => handleNumberStringPixelValue($width)};
    height: 50px;
    min-height: fit-content;
    border-radius: 8px;

    ${({ $backgroundColor }) => ($backgroundColor
    ? css`
            background-color: ${$backgroundColor};

            &:hover {
              background-color: ${shade(0.1, $backgroundColor)};
            }
          `
    : null)}
  }
`;

export default Button;
