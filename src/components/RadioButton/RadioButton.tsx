import React, { Component, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
const RadioButton = ({ PROP }) => {
    const [value, setValue] = useState()
    return (
        <View>
            {PROP.map(res => {
                return (
                    <View key={res.key} style={styles.container}>
                        <TouchableOpacity
                            style={styles.radioCircle}
                            onPress={() => {
                                setValue(res.key)
                            }}>
                            {value === res.key && <View style={styles.selectedRb} />}
                        </TouchableOpacity>
                        <Text style={styles.radioText}>{res.text}</Text>
                    </View>
                );
            })}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    radioText: {
        marginRight: 35,
        paddingLeft: 6
    },
    radioCircle: {
        height: 15,
        width: 15,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#6EC1C2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 7.5,
        height: 7.5,
        borderRadius: 50,
        backgroundColor: '#6EC1C2',
    },
});

export default RadioButton;