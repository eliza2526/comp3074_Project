import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Restaurant Guide</Text>
      <Text style={styles.content}>
        Group No. G-61 
        </Text>
        <Text style={styles.content}>
        Group Member: Elizabeth Thomas
        </Text>
        <Text style={styles.content}>
        Student ID: 101097106
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 22,
    textAlign: 'center',
  },
});

export default AboutScreen;
