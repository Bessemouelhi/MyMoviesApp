import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator } from 'react-native';
import films from '../helpers/FilmData'
import { FlatList } from 'react-native-gesture-handler';
import FilmItem from './FilmItem'
import { getFilmsByText } from '../api/MoviesDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            films: [],
            isLoading: false
        }
        searchedText = ""
    }

    _loadFilms() {
        this.setState({ isLoading: true})
        getFilmsByText(this.searchedText).then(data => 
            this.setState({ 
                films: data.results,
                isLoading: false
            })
        )
    }

    _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
              {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement
             : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
            </View>
          )
        }
      }

    _searchTextInput(text) {
        this.searchedText = text
    }

    render() {
        console.log(this.state.isLoading)
        return (
            <View style={styles.marginStyle}>
                <TextInput onSubmitEditing={() => this._loadFilms()} onChangeText={(text) => this._searchTextInput(text)} style={styles.textInput} placeholder="Titre du film"/>
                <View style={styles.buttonStyle} >
                    <Button title="Rechercher" onPress={() => {
                        this._loadFilms()
                    }} />
                </View>
                <FlatList 
                    data={ this.state.films }
                    keyExtractor={(item) => item.id.toString()}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => console.log('End Reached')}
                    renderItem={({item})  => <FilmItem film={item} />}></FlatList>
                    {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    marginStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 100
    },
    textInput: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      },
  });

export default Search
