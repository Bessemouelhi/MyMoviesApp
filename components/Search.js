import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import films from '../helpers/FilmData'
import { FlatList } from 'react-native-gesture-handler';
import FilmItem from './FilmItem'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.marginStyle}>
                <TextInput style={styles.textInput} placeholder="Titre du film"/>
                <View style={styles.buttonStyle} >
                    <Button title="Rechercher" onPress={() => {
                        alert('OK')
                    }} />
                </View>
                <FlatList 
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item})  => <FilmItem film={item} />}></FlatList>
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
