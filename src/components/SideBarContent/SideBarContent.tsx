// components/SidebarContent.tsx

import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface SidebarContentProps {
  navigation: any;
}

const SideBarContent: React.FC<SidebarContentProps> = ({navigation}) => {
  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation('Home')}>
        <Text>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation('Settings')}>
        <Text>Instituições de saúde</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation('Settings')}>
        <Text>Lembrete de remédios</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleNavigation('Settings')}>
        <Text>Sobre nós</Text>
      </TouchableOpacity>
      <Text style={styles.version}>Versão do app 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginBottom: 20,
  },
  version: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    fontSize: 12,
  },
});

export default SideBarContent;
