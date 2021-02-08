


import styled from 'styled-components';

import { VideoTile } from '../../ui/VideoTile';

export const ContentTile = styled(VideoTile)`
  background-color: ${({ theme }) => theme.colors.greys.grey80};
`;

export default ContentTile;
