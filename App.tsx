
import React from 'react';
import {SafeAreaView,StatusBar,StyleSheet} from 'react-native';
import Home from './src/views/Home';



function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={"#082747"}

      />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
