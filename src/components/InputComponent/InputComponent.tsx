import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, TextInputProps } from 'react-native';

interface InputComponentProps extends TextInputProps {
    onInputChange: (text: string) => void;
    placeholder: string;
}

const InputComponent = ({ onInputChange, placeholder, ...rest }: InputComponentProps) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (text: string) => {
        setInputValue(text);
        onInputChange(text); // Chama a função de retorno para notificar a alteração do valor
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={inputValue}
                onChangeText={handleInputChange}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        minHeight: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
    },
});

export default InputComponent;
