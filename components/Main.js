import React from "react";
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default function Main({ navigation })  {
        return (
            <View style={styles.main}>
        
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btntext}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registratin')}>
                <Text style={styles.btntext}>Sign up</Text>
                </TouchableOpacity>
            </View>
        );
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