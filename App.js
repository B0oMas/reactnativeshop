import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Colors,
} from 'react-native';

import Registration from './components/Registration';
import Login from './components/Login';
import Main from './components/Main';

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Main />
        {/* <Registration />  
        <Login /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#36485f',
      paddingLeft: 60,
      paddingRight: 60,
    }
});
