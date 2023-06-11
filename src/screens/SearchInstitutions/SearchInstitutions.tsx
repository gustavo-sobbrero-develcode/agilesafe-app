import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';
import InputComponent from '../../components/InputComponent/InputComponent';
import Space from '../../components/Space/Space';
import Checkbox from '../../components/Checkbox/Checkbox';
import axios, { AxiosError } from 'axios';
import InstitutionCard from '../../components/InstitutionCard/InstitutionCard';

interface InstitutionsResponse {
    especialidadeId: number;
    latitude: number;
    longitude: number;
    tipo: "Privado" | "Publico";
    id: number;
    nome: string;
    ativo: boolean;
}

const CardHeight = Dimensions.get('window').height * 0.08;

const SearchInstitutions: React.FC = () => {
    const [institutions, setInstitutions] = useState<InstitutionsResponse[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getInstitutions = () => {
        setLoading(true)
        setInstitutions([])
        axios.get('https://agilesafeapi.azurewebsites.net/instituicao-saude')
            .then((response) => {
                console.log(response.data);
                setInstitutions(response.data)
            })
            .catch(() => (error: AxiosError) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const handleInputChange = (text: string) => {
        console.log('Valor do Input:', text);
    };

    const handleSubmit = (value: string) => {
        console.log('Valor enviado:', value);
    };

    return (
        (<View style={{ backgroundColor: '#F8F4F4' }}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <Space value={50} />
                        <View style={styles.screen}>
                            <View style={styles.container}>
                                <InputComponent
                                    onInputChange={handleInputChange}
                                    placeholder='Especialidade'
                                />
                                <Space value={20} />
                                <InputComponent
                                    onInputChange={handleInputChange}
                                    placeholder='Nome da instituição de saúde'
                                />
                                <Space value={10} />
                                <View style={styles.checkboxesWrapper}>
                                    <Text>Rede</Text>
                                    <Space value={10} />
                                    <View style={styles.checkboxes}>
                                        <Checkbox label={'Pública'} />
                                        <Checkbox label={'Privada'} />
                                    </View>
                                </View>
                            </View>
                            <Space value={20} />
                            <TouchableOpacity disabled={loading} style={styles.buttonLocation} activeOpacity={0.8} onPress={getInstitutions}>
                                {!loading ? (<Text style={styles.buttonLabel}>Localizar</Text>) :
                                    (<ActivityIndicator size={25} style={styles.loader} color={"#fff"} />)

                                }
                            </TouchableOpacity>
                        </View>
                        <Space value={30} />
                        <View style={styles.titleWrapper}>

                            <Text style={styles.listTitle}>Resultado</Text>
                        </View>
                    </>
                }
                data={institutions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={
                    ({ item }) =>
                    (
                        <>
                            <Space value={10} />
                            <View style={styles.cardContainer}>
                                <InstitutionCard name={item.nome} city='Porto Alegre' state='RS' distance={2} time={30} />
                            </View>
                            <View style={styles.separator} />

                        </>
                    )
                }
            />
        </View>)
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxesWrapper: { justifyContent: 'flex-start' },
    checkboxes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '72%'
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
    titleWrapper: {
        height: 60,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
    },
    listTitle: {
        fontSize: 20,
        paddingLeft: 7,
        color: 'black',
        fontWeight: 'bold',
    },
    cardContainer: {
        height: CardHeight,
        justifyContent: 'center',
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

export default SearchInstitutions;
