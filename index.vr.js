import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  Video,
  Prefetch
} from 'react-vr';

import cactuar from './cactuar';
import steps from './steps';

class App extends React.Component {
  state = {
    stepIndex: 0,
    step: steps[0]
  };

  handleNextStateChange(index) { 
    this.setState({
      stepIndex: index, 
      step: steps[index],
    });
  };

  render() {
    const { step, stepIndex } = this.state;
    return (
      <View>
        {steps.map(e => <Prefetch key={btoa(e.panoImg)} source={asset(`images/${e.panoImg}`)} />)}
        <Pano source={asset(`images/${step.panoImg}`)}/>
        {stepIndex === steps.length - 1 ?
          <Video source={asset('Congratulations.mp4')}
            style={{
              width: 1, 
              height: 1,
              layoutOrigin: [0.5, 0.5],
              transform: [step.translate],
            }} />
          : <Model
              onEnter={() => this.handleNextStateChange(stepIndex + 1)}
              style={{
                transform: [step.translate, {scale: 0.0003 }],
              }}
              source={cactuar} />}
      </View>
    );
  };
};

AppRegistry.registerComponent('App', () => App);
