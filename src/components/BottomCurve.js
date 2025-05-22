import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const BottomCurve = () => {
  return (
    <Svg
      width={width}
      height="150"
      viewBox={`0 0 ${width} 150`}
      style={{ position: 'absolute', bottom: 0 }}
    >
      <Path
        d={`M0,0 Q${width * 0},120 ${width},60 L${width},150 L0,150 Z`}
        fill="#8F87F1"
      />
    </Svg>
  );
};

export default BottomCurve;
