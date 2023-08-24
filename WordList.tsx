import React from 'react';
import { FlatList, Text } from 'react-native';

interface WordListProps {
  validWords: string[];
}

const WordList: React.FC<WordListProps> = ({ validWords }) => {
  return (
    // Render the list of valid words
    <FlatList
      data={validWords}
      renderItem={({ item, index }) => <Text key={index}>{item}</Text>}
      style={{ marginTop: 20 }}
    />
  );
};

export default WordList;
