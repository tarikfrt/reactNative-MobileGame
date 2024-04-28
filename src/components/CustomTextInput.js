import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomTextInput = ({title, 
isSecureText,
handleOnChangeText,
handleValue,
handlePlaceHolder}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput 
        secureTextEntry={isSecureText}
        placeholder={handlePlaceHolder}
        style={styles.textInputStyle}
        onChangeText={handleOnChangeText}
        value={handleValue}
      />
    </View>
  )
}

export default CustomTextInput
const styles = StyleSheet.create({
inputContainer:{
    width:'80%',
},
inputBoxText:{
    fontWeight:'bold',
    color:'deepskyblue'
},
textInputStyle:{
    borderBottomWidth:2,
    borderColor:'deepskyblue',
    width:'100%',
    height:50,
    borderRadius:10,
    marginVertical:10,
    textAlign:'center',
    color:'darkslategrey',
    fontWeight:'bold',
}
})