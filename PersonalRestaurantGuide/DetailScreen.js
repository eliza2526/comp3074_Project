import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Button } from 'react-native';

const DetailScreen = ({ route }) => {
  const { name, address, rating, cuisine, image, reviews } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    };
 

  return (
    <View style={styles.container}>
      <Image source = {image} style={styles.restaurantImage} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.cuisine}>Cusine: {cuisine}</Text>
      <Text style={styles.cuisine}>Rating: {rating}</Text>
      <Button style={styles.button} title= { 
        isFavorite ? "Remove from Favorites" : "Add to Favorites" }
        onPress={toggleFavorite} /> 
      
      <Text style={styles.reviewsTitle}>Reviews:</Text> 
      <FlatList 
        data={reviews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => ( <Text style={styles.reviewItem}>{item}</Text>
        )}
        />     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cuisine: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#555',
  },
  restaurantImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
 },
 reviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
},
reviewItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 14,
    
},
address: {
    fontSize: 24,
    color: '#555',
    marginBottom: 16,
    textAlign: 'center',
},


});

export default DetailScreen;
