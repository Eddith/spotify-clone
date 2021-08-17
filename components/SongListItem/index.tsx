import React  from "react";
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';

import { Song } from "../../types";
import styles from './styles';

export type SongListItemProps = {
  song: Song
}

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;
  
  return ( 
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContianer}>
          <Text style={styles.title}>{ song.title }</Text>
          <Text style={styles.artist}>{ song.artist }</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
    
  );
}

export default SongListItem;