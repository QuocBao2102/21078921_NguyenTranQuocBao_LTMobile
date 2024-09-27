import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
export default function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
    <View style={styles.Login}>
      <Text style={styles.Login_Text}> LOGIN </Text>
    </View>
    <View style={styles.InputContainer}>
    <View style={styles.inputWrapper}>
          <Icon name="user" size={20} color="black" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Name" />
        </View>
        <View style={styles.inputWrapper}>
          <Icon name="lock" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.iconEyeWrapper}>
            <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="black" style={styles.iconEye} />
          </TouchableOpacity>
        </View>
    </View>
    <View style={styles.LoginContainer}>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style = {styles.Forgot}>Forgot your password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BF9A00',
  },
  Login: {
    flex: 1,
    fontWeight: 'bold',
    marginTop: 70,
  },
  Login_Text: {
    fontSize: 30,
    color: 'black',
  },
  InputContainer: {
    flex: 2,
    marginTop: 100,
    // backgroundColor: 'white',
    alignItems: 'center',
  },
  inputWrapper: {
    paddingLeft: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    padding: 20,
    marginVertical: 10,
    width: '90%',
    backgroundColor: '#C4C4C44D',
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
icon: {
  position: 'absolute',
  left: 20,
},
iconEyeWrapper: {
  position: 'absolute',
  right: 10,
},
loginButton: {
  backgroundColor: 'black',
  marginTop: 60,
  width: '90%',
  height: 60,
  justifyContent: 'center',
  marginVertical: 50,
},
LoginContainer: {
  flex: 6,
  alignItems: 'center',
},
loginButtonText: {
  color: 'white',
  textAlign: 'center',
  fontSize: 20,
},
Forgot: {
  color: 'black',
  fontSize: 20,
},


});