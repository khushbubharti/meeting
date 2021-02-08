


import React, { FC, HTMLAttributes } from 'react';

import { BaseProps } from '../Base';

import { StyledPopOverSeparator } from './Styled';

export interface PopOverSeparatorProps
  extends Omit<HTMLAttributes<HTMLLIElement>, 'css'>,
    BaseProps {}

export const PopOverSeparator: FC<PopOverSeparatorProps> = (props) => (
  <StyledPopOverSeparator data-testid="popover-separator" {...props} />
);

export default PopOverSeparator;
