import React from "react";
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Login extends React.Component {
    render(){
      return (
        <View style={styles.login}>
            <Text style={styles.header}>Login</Text>
            <TextInput style={styles.textinput} placeholder="Your email"
            underlineColorAndroid={'transparent'} />
            <TextInput style={styles.textinput} placeholder="Your password"
            secureTextEntry={true} underlineColorAndroid={'transparent'} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Log in</Text>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    login: {
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