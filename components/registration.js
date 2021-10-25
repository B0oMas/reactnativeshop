import React from "react";
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default function Registration ({navigation}) {
      return (
        <View style={styles.register}>
            <Text style={styles.header}>Register</Text>
            <TextInput style={styles.textinput} placeholder="Your name"
            underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="Your surrname"
            underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="Date of birth"
            underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="Your email"
            underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="Adress"
            underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="Your password"
            secureTextEntry={true} underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="Confirm your password"
            secureTextEntry={true} underlineColorAndroid={'transparent'} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btntext}>Create your account</Text>
            </TouchableOpacity>
        </View>
      );
    
  }

  const styles = StyleSheet.create({
        register: {
            alignSelf: 'stretch',

        },
        header: {
            alignSelf: 'center',
            fontSize: 24,
            color: '#fff',
            paddingBottom: 10,
            marginBottom: 40,
            borderBottomColor: '#199187',
            borderBottomWidth: 1,
        },
        textinput: {
            alignSelf: 'stretch',
            color: '#fff',
            height: 40,
            marginBottom: 30,
            borderBottomColor: '#f8f8f8',
            borderBottomWidth: 1,
        },
        button: {
            alignSelf: 'stretch',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#59cbbd',
            marginTop: 30,
        },
        btntext: {
            color: '#fff',
            fontWeight: 'bold',
        }
  });