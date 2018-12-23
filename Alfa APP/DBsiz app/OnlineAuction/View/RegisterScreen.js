import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, StatusBar } from 'react-native';
import { AppRegistiry, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


import Form from './components/RegisterForm';

export default class RegisterScreen extends Component {


    

    render() {

        return (

            <View style={styles.MainContainer}>

                <Form/>
               
            </View>
        );
    }
}


const styles = StyleSheet.create({

    MainContainer: {

        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7986cb',
        padding: 11,
        alignItems : 'center'

    },

    text:
    {
        fontSize: 22,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
        padding: 10
    },

});