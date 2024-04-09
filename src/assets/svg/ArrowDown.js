import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowDown({ height = 8, width = 14, fill = '#454F59' }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M.263.28A.908.908 0 000 .924a.917.917 0 00.263.642l6.094 6.169A.897.897 0 006.992 8a.888.888 0 00.635-.266l6.094-6.17A.908.908 0 0014 .919a.916.916 0 00-.263-.653A.897.897 0 0013.09 0a.889.889 0 00-.64.283L6.993 5.81 1.532.283A.897.897 0 00.899.016.888.888 0 00.263.28z"
        fill={fill}
      />
    </Svg>
  );
}

export default ArrowDown;
