import React, { useState } from 'react';
import { TextInput, Button } from 'react-native';

interface WordFinderProps {
  dictionary: string[];
  onWordsFound: (validWords: string[]) => void;
}

const WordFinder: React.FC<WordFinderProps> = ({ dictionary, onWordsFound }) => {
  const [input, setInput] = useState('');

  const findWords = () => {
    const letters = input.toLowerCase().replace(/[^a-z]/g, '');
    if (dictionary.includes(letters)) {
        // Call the getValidWords function to find valid words
        const validWordsList = getValidWords(letters, dictionary);
        // Notify the parent component about the found words
        onWordsFound(validWordsList);
    }   else {
        console.error('This is invalid word, please try smth else')
    }
  };

  const getValidWords = (letters: string, wordList: string[]) => {
    const validWordsSet: Set<string> = new Set();
  
    const backtrack = (remaining: string, currentWord: string) => {
      if (currentWord.length > 0 && wordList.includes(currentWord)) {
        validWordsSet.add(currentWord);
      }
  
      for (let i = 0; i < remaining.length; i++) {
        backtrack(remaining.slice(0, i) + remaining.slice(i + 1), currentWord + remaining[i]);
      }
    };
  
    backtrack(letters, '');
  
    const validWordsList = Array.from(validWordsSet);
    return validWordsList;
  };
  console.log(input)

  return (
    <>
      <TextInput
        placeholder="Enter letters"
        value={input}
        onChangeText={setInput}
        style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 3, borderRadius: 10 }}
      />
      <Button title="Find Words" onPress={findWords} />
    </>
  );
};

export default WordFinder;
