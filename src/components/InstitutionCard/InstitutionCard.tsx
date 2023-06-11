import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface InstitutionCardProps {
    name: string;
    city?: string;
    state?: string;
    distance?: number;
    time?: number;
}

const InstitutionCard = ({ name, city, state, distance, time }: InstitutionCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Text style={styles.circleTime}>{time}</Text>
            </View>
            <View style={styles.labelContent}>
                <Text style={styles.title}>{name} - {city}/{state}</Text>
                <Text>{distance}km - {time} minutos de espera</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        borderRadius: 100,
        backgroundColor: 'green',
        width: 40,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    circleTime: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    labelContent: {
        paddingLeft: 20
    },
    title: {
        fontSize: 13
    }
});

export default InstitutionCard;
