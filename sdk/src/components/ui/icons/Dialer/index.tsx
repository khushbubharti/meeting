


import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Dialer: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M12 15.972c1.11 0 2.014.904 2.014 2.015C14.014 19.097 13.11 20 12 20c-1.11 0-2.014-.903-2.014-2.013 0-1.111.904-2.015 2.014-2.015zm0 1.036c-.54 0-.977.44-.977.979 0 .54.438.977.977.977.54 0 .977-.438.977-.977 0-.54-.438-.979-.977-.979zm-4.986-6.022c1.11 0 2.014.904 2.014 2.014 0 1.11-.904 2.014-2.014 2.014C5.904 15.014 5 14.11 5 13c0-1.11.904-2.014 2.014-2.014zm4.986 0c1.11 0 2.014.904 2.014 2.014 0 1.11-.904 2.014-2.014 2.014-1.11 0-2.014-.904-2.014-2.014 0-1.11.904-2.014 2.014-2.014zm4.986 0c1.11 0 2.014.904 2.014 2.014 0 1.11-.904 2.014-2.014 2.014-1.11 0-2.014-.904-2.014-2.014 0-1.11.904-2.014 2.014-2.014zm-9.972 1.036c-.54 0-.977.439-.977.978 0 .54.438.978.977.978.54 0 .977-.438.977-.978 0-.539-.437-.978-.977-.978zm4.986 0c-.54 0-.977.439-.977.978 0 .54.438.978.977.978.54 0 .977-.438.977-.978 0-.539-.438-.978-.977-.978zm4.986 0c-.54 0-.977.439-.977.978 0 .54.437.978.977.978s.977-.438.977-.978c0-.539-.438-.978-.977-.978zM7.014 6c1.11 0 2.014.903 2.014 2.014 0 1.11-.904 2.014-2.014 2.014C5.904 10.028 5 9.124 5 8.014 5 6.904 5.904 6 7.014 6zM12 6c1.11 0 2.014.903 2.014 2.014 0 1.11-.904 2.014-2.014 2.014-1.11 0-2.014-.904-2.014-2.014C9.986 6.904 10.89 6 12 6zm4.986 0C18.096 6 19 6.904 19 8.013c0 1.111-.904 2.015-2.014 2.015-1.11 0-2.014-.904-2.014-2.015 0-1.11.904-2.013 2.014-2.013zM7.014 7.036c-.54 0-.977.439-.977.978 0 .54.438.978.977.978.54 0 .977-.438.977-.978s-.437-.978-.977-.978zm4.986 0c-.54 0-.977.439-.977.978 0 .54.438.978.977.978.54 0 .977-.438.977-.978s-.438-.978-.977-.978zm4.986 0c-.54 0-.977.438-.977.977 0 .54.437.979.977.979s.977-.439.977-.979c0-.539-.438-.977-.977-.977z" />
  </Svg>
);

Dialer.displayName = 'Dialer';

export default Dialer;
