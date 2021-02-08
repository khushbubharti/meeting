


import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Share: React.SFC<SvgProps> = (props) => (
  <Svg {...props}>
    <path d="M15.239 15.197c.778-.778 2.047-.779 2.829.003.78.781.781 2.05.002 2.828-.389.39-.9.584-1.412.584-.462 0-.92-.168-1.293-.486-.02.014-.033.033-.055.045-1.027.551-2.16.833-3.303.833-.592 0-1.187-.075-1.771-.227-.268-.07-.428-.343-.357-.61.069-.266.34-.429.609-.358 1.452.377 2.975.197 4.299-.498-.266-.71-.118-1.543.452-2.114zM5.747 9.866l.09.014c.268.07.428.343.357.61-.373 1.434-.202 2.924.468 4.235.213-.077.44-.123.673-.123.537 0 1.038.208 1.417.586.78.781.781 2.05.002 2.83-.377.376-.877.584-1.411.584-.537 0-1.04-.21-1.417-.588-.378-.378-.587-.88-.587-1.414 0-.486.178-.94.493-1.303C5 13.74 4.78 11.953 5.228 10.238c.069-.266.34-.426.609-.358zm10.904 5.747c-.256 0-.511.097-.705.291-.389.39-.388 1.024.003 1.415.391.39 1.025.39 1.414.002.389-.389.388-1.023-.002-1.414-.196-.196-.453-.294-.71-.294zm-9.314-.01c-.268 0-.518.102-.707.29-.188.188-.292.44-.29.706 0 .267.104.52.293.708.19.19.44.294.708.295.268 0 .518-.104.706-.292.39-.39.388-1.024-.003-1.415-.189-.189-.44-.293-.708-.293zm7.807-9.594c.777-.778 2.047-.779 2.828.002.72.72.77 1.847.165 2.631.862 1.572 1.09 3.388.637 5.125-.059.225-.26.374-.483.374-.042 0-.084-.005-.126-.016-.268-.07-.428-.343-.358-.61.374-1.435.191-2.929-.484-4.242-.242.1-.5.15-.76.15-.514 0-1.026-.195-1.417-.586-.78-.78-.78-2.049-.002-2.828zm-6.49-.144c1.568-.86 3.363-1.092 5.111-.636.268.07.428.343.358.61-.07.267-.34.427-.61.358-1.442-.377-2.926-.207-4.234.463.104.244.161.509.162.783 0 .534-.207 1.037-.585 1.414-.39.389-.9.584-1.412.584-.513 0-1.026-.196-1.417-.586-.78-.781-.78-2.05-.002-2.83.377-.375.878-.583 1.411-.583.45 0 .87.154 1.218.423zm-1.216.577c-.268 0-.518.104-.706.29-.389.39-.388 1.025.002 1.416.392.39 1.025.39 1.415.002.188-.188.292-.44.292-.706 0-.244-.098-.47-.257-.651-.014-.017-.033-.024-.045-.043-.005-.008-.005-.017-.01-.025-.187-.18-.43-.283-.69-.283zm9.118-.017c-.256 0-.51.097-.705.291-.389.39-.388 1.023.002 1.414.393.392 1.026.392 1.415.002.39-.389.388-1.023-.003-1.414-.195-.195-.453-.293-.709-.293z" />
  </Svg>
);

Share.displayName = 'Share';

export default Share;
