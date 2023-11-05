import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Platform, Button, Alert, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>      
      <Button             
      // color="green"
      title="Click me"
      onPress = {() => Alert.alert(
        // Title
        "My button", 
        // Message
        "Hey there, we doing it.",
        // Custom buttons
        [
          { text: "Yes"},
          { text: "No"}
        ]
        )}/>
    </SafeAreaView>
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
