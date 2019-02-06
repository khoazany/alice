import {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Image, View, TextInput} from "react-native";
import React from "react";
import Icon from '../../Components/IconComponent'

type Props = {};
export default class AppsScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      tabBarIcon: ({tintColor}) => <Icon icon="HomeGrey" size={30}/>,
    }
  };

  navigate = () => console.log('hello');

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <View style={styles.container}>
          <TextInput placeholder='Search' style={{width: '100%', backgroundColor: '#848484', borderRadius: 10, height: 35, paddingLeft: 10, marginBottom: 10}}/>
          <Text style={{color: 'white', fontSize: 25}}>Apps</Text>
          <View style={styles.appsContainer}>
            <View style={styles.appIcon}>
              <TouchableOpacity style={styles.appSquare} onPress={() => this.props.navigation.navigate('App1')}>
                <Image source={require('../../../Assets/radar-black.png')} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
              </TouchableOpacity>
              <Text style={{color: 'white', fontSize: 10}}>Radar</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, {backgroundColor: '#ffd6f7'}]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/cryptokitties.png')} style={{width: 60, height: 60, resizeMode: 'contain'}}/>
              </TouchableOpacity>
              <Text style={{color: 'white', fontSize: 10}}>Cryptokitties</Text>
            </View>
          </View>
          <Text style={{color: 'white', fontSize: 25}}>Trending Dapps</Text>
          <View style={styles.appsContainer}>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, {backgroundColor: '#dbe0ff'}]} onPress={() => this.props.navigation.navigate('App3')}>
                <Image source={require('../../../Assets/localethereum.png')} style={{width: 40, height: 40, resizeMode: 'contain'}}/>
              </TouchableOpacity>
              <Text style={{color: 'white', fontSize: 10}}>localethereum</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, {backgroundColor: '#fff4c8'}]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/etheremon.png')} style={{width: 50, height: 50, resizeMode: 'contain'}}/>
              </TouchableOpacity>
              <Text style={{color: 'white', fontSize: 10}}>Etheremon</Text>
            </View>
            <View style={styles.appIcon}>
              <TouchableOpacity style={[styles.appSquare, {backgroundColor: '#ffffff'}]} onPress={() => this.props.navigation.navigate('App2')}>
                <Image source={require('../../../Assets/instadapp.png')} style={{width: 50, height: 50, resizeMode: 'contain'}}/>
              </TouchableOpacity>
              <Text style={{color: 'white', fontSize: 10}}>InstaDApp</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  appIcon: {
    height: 84,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  appsContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  appSquare: {
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#43fd9c'
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#222222',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
