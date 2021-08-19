import React, { useState } from "react";
import { View, Text, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styles from "../Album/styles";


const Search = () => {
   const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
}

export default Search;