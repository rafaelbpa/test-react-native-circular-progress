import React from 'react';
import {View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const App = () => {
  return (
    <View>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log('onAnimationComplete')}
        backgroundColor="#3d5875"
      />
    </View>
  );
};

export default App;
