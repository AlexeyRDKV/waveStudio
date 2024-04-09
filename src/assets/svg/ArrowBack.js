import React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowBack({ width = 42, height = 42, fill = '#454F59' }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15 7l-5 5 5 5"
        stroke={fill}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowBack;
