import React from 'react';
import {
  Platform,
  StyleSheet,
  AppRegistry,
} from 'react-native';

import Home from './src/component/Home';

import Chat from './src/component/Chat';

import {
  Router,
   Scene,
} from 'react-native-router-flux';


class App extends React.Component {

  render() {

    return (

<Router>


 <Scene key="app" navigationBarStyle={{backgroundColor:'#1e2226'}} titleStyle={{color:"#FFF"}}>


 <Scene key='home' component={Home} title='Home'/>

<Scene key='chat' component={Chat} title='Online Store'/>

      </Scene>


   </Router>
  );

  }
}


export default App;
