import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const myName = "Jun Jie"
    return <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
        <Text style={styles.subHeader}>My name is {myName}!</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40 
    },
    subHeader: {
        fontSize: 20
    }
})

export default ComponentsScreen;