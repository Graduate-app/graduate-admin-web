import type { FunctionComponent } from 'react';
import { LogoWrapper, LogoText } from './styles';
import SchoolIcon from '@mui/icons-material/School';


const Logo: FunctionComponent = () => (
  <LogoWrapper>
    <SchoolIcon fontSize="large"/>
    <LogoText>Випускники ККІТЕ</LogoText>
  </LogoWrapper>
);

export default Logo;
