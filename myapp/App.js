import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>TouchableWithoutFeedback</Text>      
       <TouchableWithoutFeedback>
       <Image fadeDuration={1000} borderRadius={20} source={{        
        width: 100,
        height:100,      
        uri:"https://picsum.photos/200/300",}} />
       </TouchableWithoutFeedback> */}
       
       {/* <Text>TouchableNativeFeedback</Text>
      <TouchableNativeFeedback>        
      <Image fadeDuration={1000} borderRadius={20} source={{        
      width: 100,
      height:100,      
      uri:"https://picsum.photos/200/300",}} />
      </TouchableNativeFeedback>
        */}
      <Text>TouchableOpacity</Text>
      <TouchableOpacity>        
      <Image fadeDuration={2000} borderRadius={20} source={{        
      width: 200,
      height:200,      
      uri:"https://picsum.photos/200/300",}} />
      </TouchableOpacity>
      
      
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
