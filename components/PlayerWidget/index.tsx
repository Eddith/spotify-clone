import React from "react";
import { View, Text, Image } from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

const song = {
  id: '1',
  imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
  title: 'High on You',
  artist: 'Helen',
}

export type showWidgetProps = {
  show: boolean;
}

const PlayerWidget = (prop: showWidgetProps) => {

  return ( 
    prop.show  ? (
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContianer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{ song.title }</Text>
            <Text style={styles.artist}>{ song.artist }</Text>
          </View>
          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color={'black'} />
            <FontAwesome name="play" size={30} color={'black'} />
          </View>
        </View>
      </View>
    ) : (
      <View>
      </View>
    )
  );
}

export default PlayerWidget;