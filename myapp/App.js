import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity,Platform, Button, Alert, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  
  return (
    
    <View style={{
        backgroundColor: "#fff",        
        padding: 40,
        flexDirection: 'row',  
        justifyContent: 'space-between'
    }}
    >      
      <View style={{
        backgroundColor: "black",
        width: 80,
        height: 50,
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
          marginLeft: 12,
          
        }}>Black</Text>
      </View>
      <View style={{
        backgroundColor: "yellow",
        width: 80,
        height: 50,
      }}>
        <Text style={{
          color: "#000",
          fontSize: 20,     
          margin: 10,     
          fontWeight: 'bold',        
          textAlignVertical:'center',
        }}>Yellow</Text>
      </View>
      <View style={{
        backgroundColor: "red",
        width: 80,
        height: 50,
      }}>
        <Text style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          margin: 10,
          marginLeft: 20,
        }}>Red</Text>
      </View>      
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
