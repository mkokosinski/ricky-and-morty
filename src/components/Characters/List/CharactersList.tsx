import React from 'react';
import { ChararterListItem } from 'types/characterTypes';
import CharacterItem from '../Item/CharacterItem';
import NoResults from '../NoResults/NoResults';

interface Props {
  characters: Array<ChararterListItem> | null;
}

const CharactersList = ({ characters }: Props) => (
  <>
    {characters?.length ? (
      characters.map((character) => (
        <CharacterItem key={character.id} {...character} />
      ))
    ) : (
      <NoResults />
    )}
  </>
);

export default CharactersList;
