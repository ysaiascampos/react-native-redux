import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        height: 40,
        alignSelf: 'stretch',
        padding: 10,

    }
})
const Input = ({ onChange, value, onSubmit }) => {
    return ( 
        <TextInput 
            onSubmitEditing={onSubmit}
            style={styles.input}
            onChangeText={onChange}
            value={value}
        />
     );
}
 
export default Input;