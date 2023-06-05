import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos começar?</Text>
      <View style={styles.buttonTop}>
        <CustomButton
          onPress={() => console.log('home')}
          title="Instituições de Saúde"
        />
      </View>
      <View style={styles.buttonBottom}>
        <CustomButton
          onPress={() => console.log('lembrete')}
          title="Lembrete de Remédios"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F4F4',
  },
  title: {
    paddingBottom: 60,
    fontSize: 19,
    fontWeight: '700',
  },
  buttonTop: {
    paddingBottom: 10,
    width: '50%',
  },
  buttonBottom: {
    paddingTop: 10,
    width: '50%',
  },
});

export default Home;
