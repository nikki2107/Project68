import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import In from './screens/in';
import Fb from './screens/fb';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator}  from 'react-navigation-tabs';
export default class App extends React.Component{
  render(){
    return(
    <View style={styles.container}>
     <AppContainer/>
     </View>

    )
  }
}
const TabNavigator = createBottomTabNavigator({
  FACEBOOK :  Fb,
  INSTAGRAM: In
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
