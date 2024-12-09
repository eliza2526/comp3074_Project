import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const restaurants =[
  { 
    id: '1',
    name: 'The Steak Restaurant',
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4,
    image: require('./assets/steakrestaurant.jpg'),
    cuisine: 'American',
    reviews: ['Great place!', 'Loved the steak!', 'Excellent Service!']
   },
  { 
    id: '2',
    name: 'Burger & Fries',
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4,
    image: require('./assets/burgerandfries.jpg'),
    cuisine: 'American',
    reviews: ['Great place!', 'Loved the Burgers and Fries!', 'Excellent Service!']
   },
  { 
    id: '3',
    name: 'Sushi Place',
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4,
    image: require('./assets/sushi.jpg'),
    cuisine: 'Japanese',
    reviews: ['Great place!', 'Loved the sushi!', 'Excellent Service!']
  },
  { 
    id: '4', 
    name: 'Chinatown Restaurant', 
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4, 
    image: require('./assets/chinese.jpg'), 
    cuisine: 'Chinese',
    reviews: ['Great place!', 'Loved the noodles!', 'Excellent Service!']
  },
  { 
    id: '5',
    name: 'Italian Bistro',
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4, 
    image: require('./assets/italian.jpg'),
    cuisine: 'Italian',
    reviews: ['Great place!', 'Loved the pasta!', 'Excellent Service!']
  },
  { 
    id: '6',
    name: 'Indian Restaurant',
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4,
    image: require('./assets/indian.jpg'),
    cuisine: 'Indian',
    reviews: ['Great place!', 'Loved the roti!', 'Excellent Service!']
  },
  { 
    id: '7',
    name: 'Greek Restaurant',
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4,
    image: require('./assets/greek.jpg'),
    cuisine: 'Middle Eastern',
    reviews: ['Great place!', 'Loved the food!', 'Excellent Service!']
  },
  { 
    id: '9',
    name: 'Vegan Restaurant',
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4,
    image: require('./assets/salad.jpg'),
    cuisine: 'Vegan'
  },
  { 
    id: '10',
    name: 'Shwarma Place',
    address: '123 Bloor Street West, Toronto, ON',
    rating: 4,
    image: require('./assets/shwarma.jpg'),
    cuisine: 'Middle Eastern',
    reviews: ['Great place!', 'Loved the shwarma!', 'Excellent Service!']
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', 
      { name: item.name,
        address: item.address,
        cuisine: item.cuisine,
        image: item.image,
        rating: item.rating,
        reviews: item.reviews })}>

      <View style={styles.restaurantItem}>
        <Image source = {item.image} style={styles.restaurantImage} />
        <View style={styles.textContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantCuisine}>{item.cuisine}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style = {styles.buttonContainer}>
      <Button title="About" onPress={() => navigation.navigate('About')} />
      </View>
      <Text style={styles.title}>Restaurants</Text>
      
      <TextInput 
        style={styles.searchBar}
        placeholder="Search..."
        // value={search}
        // onChangeText={onSearch}
      />
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  restaurantItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  restaurantName: {
    fontSize: 18,
  },
  restaurantCuisine: {
    fontSize: 14,
    color: '#777',
  },
  restaurantImage: { 
    width: 200, 
    height: 200, 
    borderRadius: 40, 
    marginRight: 16,
   },
   textContainer: { 
    flex: 1, 
    justifyContent: 'center', 
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: { 
    width: 150,
    top: 10,
    left: 250,
  }
});

export default HomeScreen;