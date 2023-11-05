import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableHighlight, TouchableOpacity, Button, Alert, View, SafeAreaView, Image } from 'react-native';

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
          { Text: "Yes"},
          { Text: "No"}
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
  },
});
