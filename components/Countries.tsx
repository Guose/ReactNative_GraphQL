import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { ActivityIndicator } from 'react-native-paper';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

interface Country {
  code: string;
  name: string;
}

const CountryList: React.FC = () => {
  const { loading, error, data } = useQuery<{countries: Country[] }>(GET_COUNTRIES);

  if (loading) { return <ActivityIndicator animating={true} />; }
  if (error) { return <Text>Error: {error.message}</Text>; }

  return (
    <FlatList 
      data={data?.countries}
      keyExtractor={(item) => item.code.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.code}>{item.code}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 18,
  },
  code: {
    color: '#888',
  },
});

export default CountryList;
