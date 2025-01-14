import type { FC } from 'react';
import { LoadingContainer, LogoWrapper } from './styles';


const LoadingPage: FC = () => (
  <LoadingContainer>
    <LogoWrapper>
      Завантаження...
    </LogoWrapper>
  </LoadingContainer>
);

export default LoadingPage;
