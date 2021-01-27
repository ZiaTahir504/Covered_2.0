/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, TextInput, StyleSheet,
} from 'react-native';
import axios from 'axios';
import config from '../../../config';

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ED254E',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    textAlign: 'center',
    width: '80%',
  },
  submitButton: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 15,
    height: 40,
    width: '20%',
  },
  submitButtonText: {
    color:'#ED254E',
  },
});

export default function PickingScreen() {
  const [books, setBooks] = useState([]);
  const [genre, setGenre] = useState();
  const { BASE_URL } = config;

  const getBooks = async () => {
    if (genre === undefined) {
      setGenre('dogs');
    }

    try {
      console.log('current genre', genre);
      const data = await axios.get(`${BASE_URL}/books`, { genre });
      console.log('get books data', data);
    } catch (err) {
      console.warn('error in getBooks function', err);
    }
  };

  useEffect(() => {
    // upon page load have books available to swipe through
    getBooks();
  });

  const onSubmit = async () => {
    // get books of the typed in genre or keyword
    getBooks();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="...type in a specific word"
        placeholderTextColor="#947077"
        autoCapitalize="none"
        onChangeText={(genre) => setGenre(genre)}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={onSubmit}
      >
        <Text style={styles.submitButtonText}>🔎</Text>
      </TouchableOpacity>
    </View>
  );
}
