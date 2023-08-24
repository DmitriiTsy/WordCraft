import React from 'react';
import { FlatList, Text } from 'react-native';
import renderer from 'react-test-renderer';
import WordList from './WordList'; // Adjust the import path based on your project structure

describe('WordList Component', () => {
  const validWords = ['apple', 'banana', 'cherry'];

  it('renders correctly with validWords', () => {
    const tree = renderer.create(<WordList validWords={validWords} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an empty list with no validWords', () => {
    const tree = renderer.create(<WordList validWords={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct number of words', () => {
    const component = renderer.create(<WordList validWords={validWords} />);
    const textComponents = component.root.findAllByType(Text);
    expect(textComponents.length).toBe(validWords.length);
  });
});
