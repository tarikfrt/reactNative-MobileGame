import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');
const buttonWidth = width / 2 - 20; // Her bir butonun genişliği ekranın yarısı kadar olacak şekilde ayarlanıyor

const OnlineGamePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable 
        onPress={()=>navigation.navigate("FiveLetter")}
        style={styles.button}>
          <Text style={styles.buttonText}>5 Harfli Kelime</Text>
        </Pressable>
        <Pressable 
        onPress={()=>navigation.navigate("SixLetter")}
        style={styles.button}>
          <Text style={styles.buttonText}>6 Harfli Kelime</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable 
        onPress={()=>navigation.navigate("SevenLetter")}
        style={styles.button}>
          <Text style={styles.buttonText}>7 Harfli Kelime</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default OnlineGamePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Değişiklik burada
    marginBottom: 10,
  },
  button: {
    width: buttonWidth,
    aspectRatio: 1, // Kare şeklinde butonlar
    backgroundColor: 'orange',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
