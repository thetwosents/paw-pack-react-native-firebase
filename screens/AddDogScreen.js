import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, TextInput, Logo, Button, FormErrorMessage } from '../components';
import { Images, Colors, auth } from '../config';

export const AddDogScreen = () => {

    return (
        <>
            <View isSafe style={styles.container}>
                <KeyboardAwareScrollView enableOnAndroid={true}>
                    <Formik
                        initialValues={{
                            name: '',
                            breed: '',
                        }}
                        onSubmit={values => console.log(values)}
                    >
                        {({
                            values,
                            touched,
                            errors,
                            handleChange,
                        }) => (
                            <>
                                {/* Input fields */}
                                <TextInput
                                    name='name'
                                    leftIconName='email'
                                    placeholder='Enter name'
                                    autoCapitalize='none'
                                    keyboardType='name'
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
                                    keyboardType='name'
                                    textContentType='name'
                                    autoFocus={true}
                                    value={values.breed}
                                    onChangeText={handleChange('breed')}
                                />
                                <Button
                                    title='Add dog'
                                    onPress={() => console.log(values)}
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
  