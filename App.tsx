import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import CountryList from './components/Countries';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <CountryList />
      </SafeAreaView>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
