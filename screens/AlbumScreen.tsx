import React, { useEffect } from "react";
import { View } from 'react-native';
import { useRoute } from "@react-navigation/native";
import albumDetails from "../data/albumDetails";

import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";
import { FlatList } from "react-native-gesture-handler";

const album = albumDetails;

const AlbumScreen = () => {

  const route = useRoute();
 
  useEffect( () => {
    console.log(route)
  }, []);

  return (
    <View>
      <FlatList 
        data={albumDetails.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={( item ) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
      />
    </View>
  );  
}

export default AlbumScreen;