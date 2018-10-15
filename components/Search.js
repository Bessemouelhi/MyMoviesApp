import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class Search extends React.Component {
    render() {
        return (
            <View style={styles.marginStyle}>
                <TextInput style={styles.textInput} placeholder="Titre du film"/>
                <View style={styles.buttonStyle} >
                    <Button title="Rechercher" onPress={() => {}} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    marginStyle: {
        marginLeft: 5,
        marginRight: 5,
    },
    textInput: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
    },
  });

export default Search
