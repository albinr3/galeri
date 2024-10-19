import React from 'react';
import { View, FlatList, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Image } from 'expo-image';

import { FlashList } from "@shopify/flash-list";

// Ancho de la pantalla para ajustar las imágenes
const { width } = Dimensions.get('window');

// Lista de imágenes
const images = [
  { id: '1', url: 'https://images.pexels.com/photos/28824456/pexels-photo-28824456.jpeg' },
  { id: '2', url: 'https://images.pexels.com/photos/28975090/pexels-photo-28975090.jpeg' },
];

const AlbumInside = () => {
  return (
    <View style={styles.container}>
      <FlashList
        data={images}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <Pressable onPress={()=>console.log("hola")}>
                <Image source={{ uri: item.url }} style={styles.image} />
            </Pressable>
            
        )}
        estimatedItemSize={width / 4 - 8} // Tamaño estimado del ítem
        />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
  image: {
    width: width / 4 - 8, // Ancho dinámico basado en la pantalla
    height: width / 4 - 8, // Mismo valor para hacer imágenes cuadradas
    margin: 5,
    
  },
});

export default AlbumInside;