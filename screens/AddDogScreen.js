import React from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import { Formik, Field } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, TextInput, Logo, FormErrorMessage } from '../components';
import { Images, Colors, auth } from '../config';
import { getDatabase, ref, set } from "firebase/database";

export const AddDogScreen = () => {
  const handleSubmit = (values) => {
    // Formik values are available here
    const userId = auth.currentUser.uid;
    const dogRef = ref.child(`users/${userId}/dogs`);
    // Create a unique id for the dog
    const db = getDatabase();
    set(ref(db, 'users/' + userId + '/dogs/'), {
      name: values.name,
      breed: values.breed
    });

    // Navigate to HomeScreen
    navigation.navigate('Home');
    // Then navigate to /dogs screen
  };
  return (
    <>
      <View isSafe style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid={true}>
          <Formik
            initialValues={{
              name: '',
              breed: '',
            }}

            onSubmit={values => handleSubmit(values)}
            id="formik"
          >
            {({
              values,
              touched,
              errors,
              handleChange,
              handleSubmit
            }) => (
              <>
                {/* Input fields */}
                <TextInput
                  name='name'
                  leftIconName='email'
                  placeholder='Enter name'
                  autoCapitalize='none'
                  keyboardType='default'
                  textContentType='name'
                  autoFocus={true}
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                <TextInput
                  name='breed'
                  leftIconName='email'
                  placeholder='Enter breed'
                  autoCapitalize='none'
                  keyboardType='default'
                  textContentType='name'
                  autoFocus={true}
                  value={values.breed}
                  onChangeText={handleChange('breed')}
                />
                <Button
                  title='Add dog'
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 12
  },
  logoContainer: {
    alignItems: 'center'
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.black,
    paddingTop: 20
  },
  footer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 12,
    paddingBottom: 48,
    alignItems: 'center'
  },
  footerText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.orange
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: Colors.orange,
    padding: 10,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '700'
  },
  borderlessButtonContainer: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
