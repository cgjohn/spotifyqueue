import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";

class HomePage extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Host Room" onPress={() => this.props.navigation.navigate('AuthScreen')}/>
        <Button title="Join Room" onPress={() => this.props.navigation.navigate('RoomList')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 150,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default HomePage;
