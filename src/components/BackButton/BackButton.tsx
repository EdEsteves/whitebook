import React, { useContext } from 'react';

import Icon from '../Icon';
import { ReactComponent as Chevron } from '../../assets/icon-chevron.svg';
import { Link } from 'react-router-dom';
import FakeLoginContext from '../../contexts/FakeLoginContext';

export interface BackButtonProps {
  backPath?: string;
  logout?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({
  backPath,
  logout
}) => {
  const { setIsLogged, setEmail } = useContext(FakeLoginContext);

  const handleLogout = () => {
    setIsLogged(false)
    setEmail('');
    localStorage.removeItem("fakelogin");
  }

  if(!backPath && !logout) return null

  return (
    <>
      {backPath ? (
        <Link to={backPath}>
          <Icon svg={<Chevron />} />
        </Link>
      ) : (
        <button onClick={handleLogout}>
          <Icon svg={<Chevron />} />
        </button>
      )}
    </>
  );
};

export default BackButton;
