


import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Meeting: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M12 14c.276 0 .5.224.5.5 0 .277-.224.5-.5.5-1.103 0-2 .897-2 2s.897 2 2 2c.806 0 1.529-.48 1.844-1.221.107-.256.398-.372.655-.266.254.108.373.4.265.655C14.293 19.28 13.208 20 12 20c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3zm5.504-4.5c.106-.256.398-.375.654-.269 1.12.47 1.842 1.556 1.842 2.77 0 1.653-1.346 3-3 3-1.655 0-3-1.347-3-3 0-.278.223-.5.5-.5.276 0 .5.222.5.5 0 1.102.897 2 2 2 1.102 0 2-.898 2-2 0-.81-.483-1.535-1.229-1.847-.255-.107-.374-.4-.267-.655zM7 9c1.654 0 3 1.346 3 3 0 .276-.224.5-.5.5S9 12.276 9 12c0-1.103-.897-2-2-2s-2 .897-2 2c0 .872.557 1.637 1.385 1.903.262.085.407.367.322.63-.068.212-.265.346-.476.346-.05 0-.102-.007-.153-.024C4.835 14.455 4 13.308 4 12c0-1.654 1.346-3 3-3zm5-5c1.654 0 3 1.346 3 3s-1.346 3-3 3c-.277 0-.5-.224-.5-.5 0-.277.223-.5.5-.5 1.102 0 2-.897 2-2s-.898-2-2-2c-.825 0-1.577.517-1.87 1.287-.099.26-.389.388-.646.29-.258-.1-.387-.389-.288-.647C9.636 4.776 10.763 4 12 4z" />
  </Svg>
);

Meeting.displayName = 'Meeting';

export default Meeting;
