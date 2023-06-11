import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CheckboxProps {
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxToggle = () => {
        const newValue = !checked;
        setChecked(newValue);
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handleCheckboxToggle}
        >
            {checked ? (
                <Icon name="check-square-o" size={24} color="blue" />
            ) : (
                <Icon name="square-o" size={24} color="black" />
            )}
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: 70,
    },
    label: {
        paddingLeft: 10,
    },
});

export default Checkbox;