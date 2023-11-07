import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity,Platform, Button, Alert, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  
  return (
    
    <View style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: 'row-reverse'
    }}
    >
       <View style={{
        backgroundColor: "white",
        flex: 0.2,
      }}/>
      <View style={{
        backgroundColor: "black",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "yellow",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "red",
        flex: 1,
      }}>
        <Text style={{fontWeight: 'bold',color: 'white'}
          }>
         I am bold
         <Text style={{color: 'red'}}>and red
         </Text>
    </Text>
      </View>
        <View style={{
        backgroundColor: "black",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "yellow",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "red",
        flex: 1,
      }}/>
      <View style={{
        backgroundColor: "white",
        flex: 0.2,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // Platform differentiates between OS (Android or IOS)
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
