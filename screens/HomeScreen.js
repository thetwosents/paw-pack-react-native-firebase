import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';

import { auth } from '../config';

export const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  // Handle navigation
  const handleNavigation = (route) => {
    navigation.navigate(route);
  };
  return (
    <View style={styles.container}>
      {/* A button to add a dog to your account and navigate to /add-dog screen */}
      <Button
        title="Add a dog"
        // Navigate to AddDog screen
        onPress={() => handleNavigation('AddDog')}
        color="#841584"
      />

    <Button
        title="Make a connection"
        onPress={() => console.log('Make a connection')}
        color="#841584"
      />

      <Button
        title="Add your park"
        onPress={() => console.log('Add your park')}
        color="#841584"
      />

      {/* Make a group or community called a pack and let members invite other users to their "Pack" */}
      <Button
        title="Make a pack"
        onPress={() => console.log('Make a pack')}
        color="#841584"
      />
      <Button title="Check in" onPress={() => console.log('Check in')} />
      <Button title="Invite to pack" onPress={() => console.log('Invite to pack')} color="#841584" />

      <Button title='Sign Out' onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
