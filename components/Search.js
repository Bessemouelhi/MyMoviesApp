import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import films from '../helpers/FilmData'
import { FlatList } from 'react-native-gesture-handler';
import FilmItem from './FilmItem'
import { getFilmsByText } from '../api/MoviesDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { films: []}
        searchedText = ""
    }

    _loadFilms() {
        getFilmsByText(this.searchedText).then(data => this.setState({ films: data.results }))
    }

    _searchTextInput(text) {
        this.searchedText = text
    }

    render() {
        console.log('RENDER')
        return (
            <View style={styles.marginStyle}>
                <TextInput onChangeText={(text) => this._searchTextInput(text)} style={styles.textInput} placeholder="Titre du film"/>
                <View style={styles.buttonStyle} >
                    <Button title="Rechercher" onPress={() => {
                        this._loadFilms()
                    }} />
                </View>
                <FlatList 
                    data={ this.state.films }
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
