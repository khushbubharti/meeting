


import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Attachment: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M9.388 18.995c-1.171 0-2.337-.44-3.196-1.312-.804-.816-1.227-1.885-1.19-3.011.037-1.137.536-2.192 1.407-2.967l6.629-5.91c1.246-1.108 3.201-1.051 4.359.127.57.578.869 1.337.84 2.135-.031.799-.383 1.538-.994 2.08l-6.41 5.715c-.365.328-.841.494-1.303.462-.454-.011-.898-.202-1.227-.536-.335-.34-.509-.786-.491-1.255.016-.467.222-.9.58-1.219l6.211-5.538c.207-.185.522-.165.706.041.183.206.166.522-.04.706l-6.211 5.538c-.154.137-.239.313-.246.509-.008.195.062.373.204.517.146.148.347.233.563.239.213.016.423-.062.587-.209l6.412-5.717c.406-.36.639-.846.659-1.37.019-.52-.177-1.015-.552-1.396-.793-.805-2.129-.841-2.982-.083l-6.628 5.91c-.665.592-1.045 1.392-1.074 2.253-.027.85.293 1.659.903 2.277 1.285 1.303 3.456 1.363 4.834.134l6.429-5.731c.207-.184.522-.166.706.041.184.206.166.522-.04.705l-6.429 5.731c-.851.759-1.936 1.134-3.016 1.134" />
  </Svg>
);

Attachment.displayName = 'Attachment';

export default Attachment;
