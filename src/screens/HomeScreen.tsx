import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Provider, Toast } from '@ant-design/react-native';
import InputRenderer from '../components/inputRenderer/InputRenderer';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDoc = await firestore().collection('users').doc('SOfJx5mfMsto73jD6oqr').get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchUserData();
  }, []);

  console.log(userData); // This will log the user data if fetched successfully.

  return (
    <View style={styles.container}>
      <InputRenderer />
      <Text>Jagan Mohan Rao</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
