import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello world</Text>
      <Message>Meu primeiro app com React Native</Message>
      <StatusBar style="auto" />
    </View>
  );
}

interface MessageProps{
  children: string
}

function Message({ children }: MessageProps){
  return(
    <Text style={styles.message}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold'
  },
  message: {
    color: '#fff'
  }
});
