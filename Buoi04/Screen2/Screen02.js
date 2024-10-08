import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Screen02 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={require('./usb-bluetooth-music-receiver.png')} style={styles.headerImage} /> */}
        <Text style={styles.headerTitle}>USB Bluetooth Music Receiver</Text>
        <Text style={styles.headerSubtitle}>HJX-001 - Biến loa thường thành loa bluetooth</Text>
      </View>
      <View style={styles.rating}>
        <Text style={styles.ratingTitle}>Cực kỳ hài lòng</Text>
        <View style={styles.ratingStars}>
          <Image Image={require('./assets/start.png')} style={styles.starIcon} />
          <Image Image={require('./assets/start.png')} style={styles.starIcon} />
          <Image Image={require('./assets/start.png')} style={styles.starIcon} />
          <Image Image={require('./assets/start.png')} style={styles.starIcon} />
          <Image Image={require('./assets/start.png')} style={styles.starIcon} />
        </View>
      </View>
      <View style={styles.addPhotoButton}>
        {/* <Image source={require('./camera-icon.png')} style={styles.addPhotoButtonIcon} /> */}
        <Text style={styles.addPhotoButtonText}>Thêm hình ảnh</Text>
      </View>
      <View style={styles.review}>
        <Text style={styles.reviewTitle}>Hãy chỉ sẻ những điều mà bạn thích về sản phẩm</Text>
        <View style={styles.reviewInput}>
          {/* Add your review input component here */}
        </View>
      </View>
      <View style={styles.link}>
        <Text style={styles.linkText}>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>
      <View style={styles.submitButton}>
        <Text style={styles.submitButtonTitle}>Gửi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      padding: 20,
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    headerImage: {
      width: 80,
      height: 80,
      resizeMode: 'contain',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      textAlign: 'center',
    },
    headerSubtitle: {
      fontSize: 14,
      color: '#666',
      textAlign: 'center',
    },
    rating: {
      alignItems: 'center',
      marginBottom: 20,
    },
    ratingTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    ratingStars: {
      flexDirection: 'row',
    },
    starIcon: {
      width: 30,
      height: 30,
      marginHorizontal: 5,
    },
    addPhotoButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#007AFF',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
    },
    addPhotoButtonIcon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    addPhotoButtonText: {
      color: '#007AFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    review: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
    },
    reviewInput: {
      height: 100,
      textAlignVertical: 'top',
      color: '#000',
    },
    link: {
      alignItems: 'center',
      marginBottom: 20,
    },
    linkText: {
      color: '#007AFF',
      fontSize: 14,
      textDecorationLine: 'underline',
    },
    submitButton: {
      backgroundColor: '#007AFF',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    submitButtonTitle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default Screen02;