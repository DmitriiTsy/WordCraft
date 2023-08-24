import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import WordFinder from './WordFinder';
import WordList from './WordList';

const dictionary = [
  'cat', 'dog', 'cot', 'god', 'act', 'good', 'doggo'
];

const App = () => {
  const [validWords, setValidWords] = useState<string[]>([]);
  // Update the state with the valid words found by WordFinder component  
  const handleWordsFound = (validWordsList: string[]) => {
    setValidWords(validWordsList);
  };

  return (
    <View style={{ marginTop: 128, margin: 24}}>
      <View style={{ alignItems: 'center',paddingBottom: 100}}>
        <Text style={{fontSize: 24, fontWeight: '500'}}>WordCraft</Text>
      </View>
      <WordFinder dictionary={dictionary} onWordsFound={handleWordsFound} />
      <WordList validWords={validWords} />
    </View>
  );
};


export default App;
