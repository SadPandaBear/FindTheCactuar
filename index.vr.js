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

export default class Nevermore extends React.Component {
  constructor() {
    super();
    this.state = {
      steps: [
        {
          panoImg: 'matrix.jpg',
          translate: {translate: [-2, -2, -3]}
        },
        {
          panoImg: 'space.jpg',
          translate: {translate: [2, 1, 4]}
        },
        {
          panoImg: 'minecraft.jpg',
          translate: {translate: [-2, 0, -2]}
        },
        {
          panoImg: 'train.jpg',
          translate: {translate: [0, -4, 0]}
        },
        {
          panoImg: 'starry-sky.jpg',
          translate: {translate: [-4, 0, -1]}
        },
        {
          panoImg: 'winter-outdoor.jpg',
          translate: {translate: [0, 0, 3]}
        },
        {
          panoImg: 'psy.jpg',
          translate: {translate: [0, 0, -1]}
        },
      ],
      actualStep: 0
    }
  }

  render() {
    let cactuar = {
      obj: asset('character/Cactuar.obj'),
      mtl: asset('character/Cactuar.mtl')
    }

    return (
      <View>
        <Pano source={asset(`images/${this.state.steps[this.state.actualStep].panoImg}`)}/>
        {this.state.actualStep === this.state.steps.length - 1 ?
         <Video source={{uri: 'assets/Congratulations.mp4'}}
            style={{
              width: 1, 
              height: 1,
              layoutOrigin: [0.5, 0.5],
              transform: [this.state.steps[this.state.actualStep].translate]
            }
          } />
        : <Model
            onEnter={() => this.setState({actualStep: ++this.state.actualStep})}
            style={{
              transform: [this.state.steps[this.state.actualStep].translate, {scale: 0.0003 }], 
              
            }}
            source={cactuar} />}
      </View>
    );
  }
};

AppRegistry.registerComponent('Nevermore', () => Nevermore);
