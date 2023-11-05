import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello World</Text> */}
      <Image fadeDuration={1000} borderRadius={4} source={{        
        width: 200,
        height:300,      
        uri:"https://picsum.photos/200/300",}} />
      {/* <Image source={require("./assets/splash.png")}/> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
