
import { css, keyframes } from 'styled-components';

const rotateKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const rotate = ({ time = '1.2s', type = 'infinite' } = {}) => css`
  animation: ${rotateKeyframes} ${time} cubic-bezier(0.5, 0, 0.5, 1) ${type};
`;
