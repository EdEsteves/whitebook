import React from 'react';

import Icon from '../Icon';
import { ReactComponent as Chevron } from '../../assets/icon-chevron.svg';
import { Link } from 'react-router-dom';

export interface BackButtonProps {
  backPath?: string;
}

const BackButton: React.FC<BackButtonProps> = ({
  backPath
}) => {

  if(!backPath) return null

  return (
    <Link to={backPath}>
			<Icon svg={<Chevron />} />
    </Link>
  );
};

export default BackButton;
