import React, { ReactElement } from 'react';

type IconProps = {
  svg: ReactElement<SVGSVGElement>;
}

const Icon: React.FC<IconProps> = ({ svg }) => {
  return svg;
};

export default Icon;