import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, StatusBar, TouchableOpacity ,withNavigation} from 'react-native';




class RegisterForm extends Component {


    gotoNextActivity = () => {
        this.props.navigation.navigate('Login');
        return true;
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    placeholder='Username'
                    placeholderTextColor="#ffffff"
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Email'
                    placeholderTextColor="#ffffff"
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Password'
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Password Check'
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                />

                <TouchableOpacity onPress={this.gotoNextActivity} style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default RegisterForm;
const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7986cb',
        padding: 11,
        alignItems: 'center'

    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#ffab00',
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,
    },
    text:
    {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10
    },

    inputBox: {
        width: 300,
        backgroundColor: '#aab6fe',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10
    }

});