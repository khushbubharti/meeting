


import React from 'react';

import { StyledRoster } from './Styled';
import { BaseProps, FocusableProps } from '../Base';

export interface RosterProps extends BaseProps, FocusableProps {}

export const Roster: React.FC<RosterProps> = ({ children, ...rest }) => {
  return <StyledRoster {...rest}>{children}</StyledRoster>;
};

export default Roster;
