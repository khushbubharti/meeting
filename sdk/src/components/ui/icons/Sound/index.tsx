


import React from 'react';
import Svg, { SvgProps } from '../Svg';

interface SoundProps extends SvgProps {
  /** Whether or not should show a sound off icon. */
  disabled?: boolean;
}

const Sound: React.SFC<SoundProps> = ({ disabled, ...rest }) => (
  <Svg {...rest}>
    {disabled ? (
      <path d="M10.939 7.261c.393-.297.914-.344 1.361-.124.431.213.7.638.7 1.11v7.506c0 .472-.269.897-.7 1.11-.187.092-.385.137-.582.137-.28 0-.557-.09-.788-.268l-2.486-1.728c-.087-.06-.193-.093-.302-.093H6.256C5.563 14.911 5 14.36 5 13.682v-3.358c0-.68.566-1.235 1.263-1.235h1.88c.108 0 .213-.032.298-.092zm.918.772c-.042-.019-.182-.077-.32.03l-.018.012-2.505 1.741c-.253.178-.555.273-.871.273h-1.88c-.145 0-.263.105-.263.235v3.358c0 .127.115.23.256.23h1.886c.316 0 .618.093.874.272l2.503 1.741c.159.12.297.062.338.042.053-.027.143-.089.143-.214V8.247c0-.125-.09-.187-.143-.214zM14.9 10.13c.195-.195.512-.195.707 0l1.163 1.163 1.163-1.163c.195-.195.512-.195.707 0 .195.195.195.512 0 .707L17.477 12l1.163 1.163c.195.195.195.512 0 .707-.098.098-.226.147-.352.147-.128 0-.256-.049-.355-.147l-1.163-1.163-1.162 1.163c-.099.098-.226.147-.354.147-.128 0-.255-.049-.354-.147-.194-.195-.194-.512 0-.707L16.064 12 14.9 10.837c-.194-.195-.194-.512 0-.707z" />
    ) : (
      <path d="M10.939 7.26c.397-.295.914-.343 1.361-.123.431.213.7.638.7 1.11v7.506c0 .473-.269.898-.7 1.111-.187.092-.386.137-.582.137-.28 0-.557-.091-.788-.269l-2.486-1.727c-.088-.061-.194-.094-.302-.094H6.256c-.693 0-1.256-.552-1.256-1.229v-3.357c0-.681.566-1.236 1.263-1.236h1.88c.108 0 .214-.033.3-.092zm5.148.054c.176-.211.49-.241.704-.065 1.406 1.164 2.213 2.896 2.213 4.751 0 1.855-.807 3.588-2.213 4.752-.094.077-.207.115-.319.115-.144 0-.286-.061-.385-.18-.177-.213-.147-.529.065-.705 1.177-.974 1.852-2.425 1.852-3.982 0-1.556-.675-3.007-1.852-3.981-.212-.176-.242-.492-.065-.705zm-4.23.719c-.041-.02-.183-.077-.32.029l-.018.013-2.505 1.742c-.255.178-.556.272-.871.272h-1.88c-.145 0-.263.106-.263.236v3.357c0 .127.115.229.256.229h1.886c.315 0 .617.095.874.274l2.503 1.741c.157.117.298.062.337.042.054-.027.144-.09.144-.215V8.247c0-.125-.09-.187-.143-.214zm2.841 1.62c.181-.21.496-.232.705-.053.707.608 1.112 1.483 1.112 2.4 0 .917-.405 1.793-1.112 2.402-.095.08-.21.12-.326.12-.14 0-.28-.058-.379-.173-.18-.21-.156-.524.053-.705.486-.42.764-1.018.764-1.644 0-.625-.278-1.223-.764-1.642-.209-.181-.233-.496-.053-.705z" />
    )}
  </Svg>
);

Sound.displayName = 'Sound';

export default Sound;
