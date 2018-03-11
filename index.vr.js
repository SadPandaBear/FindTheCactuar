import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Video
} from 'react-vr';

import cactuar from './cactuar';
import steps from './steps';

class App extends React.Component {
  state = {
    stepIndex: 0,
    step: steps[0]
  }

  render() {
    const { step, stepIndex } = this.state;
    return (
      <View>
        <Pano source={asset(`images/${step.panoImg}`)}/>
        {stepIndex === steps.length - 1 ?
          <Video source={asset('Congratulations.mp4')}
            style={{
              width: 1, 
              height: 1,
              layoutOrigin: [0.5, 0.5],
              transform: [step.translate]
            }} />
          : <Model
              onEnter={() => this.setState({
                stepIndex: stepIndex + 1, 
                step: steps[stepIndex + 1]
              })}
              style={{
                transform: [step.translate, {scale: 0.0003 }], 
              }}
              source={cactuar} />}
      </View>
    );
  };
};

AppRegistry.registerComponent('App', () => App);
