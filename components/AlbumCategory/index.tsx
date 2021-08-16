import React from "react";
import { View, Text, FlatList } from 'react-native';
import { AlbumParamList } from '../../types';

import Album from "../Album";

import styles from "./styles";

export type AlbumCategoryProps = {
  title: string;
  albums: [AlbumParamList]
}

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ props.title }</Text>
      <FlatList 
        data={props.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={( item ) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}

export default AlbumCategory;