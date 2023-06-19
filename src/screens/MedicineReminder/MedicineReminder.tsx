import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Platform, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import InputComponent from '../../components/InputComponent/InputComponent';
import Space from '../../components/Space/Space';
import RNDateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { Keyboard } from 'react-native';
import RadioButton from '../../components/RadioButton/RadioButton';
const select1 = [
    {
        key: 'continuo',
        text: 'Contínuo',
    },
    {
        key: 'numero_dias',
        text: 'Número de dias',
    },
]

const select2 = [
    {
        key: 'todos_dias',
        text: 'Todos os dias',
    },
    {
        key: 'intervalo_dias',
        text: 'Intervalo de dias',
    },
];

const MedicineReminder: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [isDatePickerShow, setIsDatePickerShow] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));
    const [date, setDate] = useState(new Date(Date.now()));
    const [moveKeyboard, setMoveKeyboard] = useState<boolean>(false);

    const handleInputChange = (text: string) => {
        console.log('Valor do Input:', text);
    };

    const handleSubmit = (value: string) => {
        console.log('Valor enviado:', value);
    };

    const showPicker = () => {
        setIsPickerShow(true);
    };

    const onChange = (event, value) => {
        setTime(value);
        if (Platform.OS === 'android') {
            console.log(value)
            setIsPickerShow(false);
        }
    };

    const showDatePicker = () => {
        setIsDatePickerShow(true);
    };

    const onChangeDate = (event, value) => {
        setDate(value);
        if (Platform.OS === 'android') {
            console.log(value)
            setIsDatePickerShow(false);
        }
        console.log("entrou")
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView keyboardVerticalOffset={10} behavior='position' enabled={moveKeyboard}>
                <View style={{ backgroundColor: '#F8F4F4' }}>
                    <Space value={30} />
                    <View style={styles.screen}>
                        <View style={styles.container}>
                            <Text style={styles.titles}>Nome do medicamento</Text>
                            <InputComponent
                                onInputChange={handleInputChange}
                                placeholder='Medicamento'
                            />
                            <Space value={10} />
                            <View style={styles.separator} />
                            <Space value={10} />
                            <Text style={styles.titles}>Horário dos lembretes</Text>
                            <Space value={10} />
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center' }}>
                                <Text>Horário: </Text>
                                <TouchableOpacity style={styles.timeButton} onPress={showPicker}>
                                    <Text>{time.getHours()}:{time.getMinutes() < 10 ? '0' : ''}{time.getMinutes()}</Text>
                                </TouchableOpacity>
                                {isPickerShow && <RNDateTimePicker
                                    value={time}
                                    mode={'time'}
                                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                    onChange={onChange}
                                />}
                            </View>
                            <InputComponent
                                onInputChange={handleInputChange}
                                placeholder='Frequência diaria'
                            />
                            <Space value={10} />
                            <View style={styles.separator} />
                            <Space value={10} />

                            <View style={{ alignSelf: 'flex-start', width: '100%' }}>
                                <Text style={styles.titles}>Agendamento</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    <Text>Data de início: </Text>
                                    <TouchableOpacity style={styles.timeButton} onPress={showDatePicker}>
                                        <Text>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</Text>
                                    </TouchableOpacity>
                                    {isDatePickerShow && <RNDateTimePicker
                                        value={date}
                                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                        onChange={onChangeDate}
                                    />}
                                </View>
                                <Text style={styles.titleRadios}>Duração</Text>
                                <RadioButton PROP={select1} />
                                <Space value={15} />
                                <Text style={styles.titleRadios}>Definição dos dias</Text>
                                <RadioButton PROP={select2} />
                                <Space value={10} />
                                <View style={styles.separator} />
                                <Space value={10} />
                                <Text style={styles.titles}>Observações</Text>
                                <Space value={5} />
                            </View>
                            <InputComponent
                                onInputChange={handleInputChange}
                                placeholder=''
                                multiline={true}
                                numberOfLines={3}
                                onPressIn={() => setMoveKeyboard(true)}
                                onBlur={() => setMoveKeyboard(false)}
                            />
                        </View>
                        <Space value={20} />
                        <TouchableOpacity disabled={loading} style={styles.buttonLocation} activeOpacity={0.8} >
                            {!loading ? (<Text style={styles.buttonLabel}>Concluido</Text>) :
                                (<ActivityIndicator size={25} style={styles.loader} color={"#fff"} />)
                            }
                        </TouchableOpacity>
                    </View>
                    <Space value={30} />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titles: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    timeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height: 40,
        width: 100,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        marginRight: 10,
        marginLeft: 10,
        paddingHorizontal: 10,
    },
    titleRadios: {
        fontSize: 16
    },
    buttonLocation: {
        width: '35%',
        backgroundColor: '#6EC1C2',
        borderRadius: 9,
        height: 50,
        justifyContent: 'center',
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    separator: {
        backgroundColor: 'lightgray',
        width: '100%',
        height: 1,
        alignSelf: 'center',
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default MedicineReminder;
