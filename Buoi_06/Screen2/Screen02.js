import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Sử dụng icon từ thư viện react-native-vector-icons

const products = [
  {
    id: 1,
    image: require('./assets/giacchuyen 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4,
    discount: '-39%',
    reviews: 15,
  },
  {
    id: 2,
    image: require('./assets/daynguon 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4,
    discount: '-39%',
    reviews: 15,
  },
  {
    id: 3,
    image: require('./assets/dauchuyendoipsps2 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4,
    discount: '-39%',
    reviews: 15,
  },
  {
    id: 4,
    image: require('./assets/dauchuyendoi 1.png'),
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: '69.900 đ',
    rating: 4,
    discount: '-39%',
    reviews: 15,
  },
];

const ProductListScreen = ({ navigation }) => {
  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <View style={styles.productPriceRow}>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productDiscount}>{item.discount}</Text>
      </View>
      <View style={styles.productRating}>
        {Array.from({ length: item.rating }).map((_, index) => (
          <Icon key={index} name="star" size={16} color="#FFD700" />
        ))}
        <Text style={styles.productReviews}>({item.reviews})</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="bars" size={24} color="#fff" style={styles.menuIcon} />
        <TextInput style={styles.searchInput} placeholder="Dây cáp usb" placeholderTextColor="#999" />
        <Icon name="search" size={24} color="#000" style={styles.searchIcon} />
        <Icon name="shopping-cart" size={24} color="#fff" style={styles.cartIcon} />
        <View style={styles.notificationDot} />
        <Icon name="ellipsis-v" size={24} color="#fff" style={styles.moreIcon} />
      </View>

      {/* Product list */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Icon name="home" size={30} color="#007AFF" />
        <Icon name="shopping-cart" size={30} color="#007AFF" />
        <Icon name="user" size={30} color="#007AFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
  },
  menuIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingLeft: 10,
    height: 40,
    marginRight: 10,
  },
  searchIcon: {
    position: 'absolute',
    right: 50,
    zIndex: 1,
  },
  cartIcon: {
    marginRight: 10,
  },
  notificationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    top: 15,
    right: 45,
  },
  moreIcon: {
    marginLeft: 10,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 60,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  productPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  productDiscount: {
    fontSize: 12,
    color: '#FF0000',
    marginLeft: 5,
  },
  productRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  productReviews: {
    marginLeft: 5,
    fontSize: 12,
    color: '#666',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 10,
  },
});

export default ProductListScreen;
