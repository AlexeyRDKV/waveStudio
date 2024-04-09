import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function ArrowRight({
  width = 7,
  height = 12,
  fill = '#454F59',
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M6.507 6.424l-4.91 5.4a.52.52 0 01-.385.176.52.52 0 01-.386-.176.642.642 0 010-.848L5.35 6 .826 1.024a.643.643 0 010-.848.51.51 0 01.772 0l4.909 5.4a.643.643 0 010 .848z"
        fill={fill}
      />
    </Svg>
  );
}
