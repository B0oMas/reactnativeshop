import React from "react";
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.main}>
                <Text style={styles.header}>Main menu</Text>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Sign up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
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