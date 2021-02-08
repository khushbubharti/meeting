


import React from 'react';

import { text } from '@storybook/addon-knobs';
import Like from '.';
import LikeIconDocs from './Like.mdx';
import Flex from '../../Flex';

export default {
  title: 'UI Components/Icons/Like',
  parameters: {
    docs: {
      page: LikeIconDocs.parameters.docs.page().props.children.type,
    },
  },
  component: Like,
};

export const _Like = () => (
  <Flex layout="fill-space-centered">
    <Like width={text('width', '2rem')} />
  </Flex>
);
