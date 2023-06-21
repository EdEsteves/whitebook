import Icon from '../Icon';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import BackButton, { BackButtonProps } from '../BackButton/BackButton';

import * as S from './styles'

const Header: React.FC<BackButtonProps> = ({
  backPath,
  logout
}) => {
  return (
    <S.HeaderContainer>
      <BackButton backPath={backPath} logout={logout} />
      <S.HeaderLogo>
        <Icon svg={<Logo />} />
      </S.HeaderLogo>
    </S.HeaderContainer>
  )
};

export default Header;