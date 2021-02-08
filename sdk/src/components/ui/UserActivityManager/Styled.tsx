


import styled from 'styled-components';

import { fadeAnimation } from '../../../utils/animations';
import { Props } from './';

export const StyledUserActivityManager = styled.div<Props>`
  z-index: ${(props) =>
    props.isActive ? props.theme.zIndex.controlBar : '-10'};
  visibility: ${(props) => (props.isActive ? 'visible' : 'hidden')};

  &.ch-active {
    animation: ${fadeAnimation} 0.25s ease 0s forwards;
  }
`;
