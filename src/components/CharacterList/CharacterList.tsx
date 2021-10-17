import Pagination from 'components/Pagination/Pagination';
import SearchInput from 'components/SearchInput/SearchInput';
import useCharacters from 'hooks/useCharacters';
import { useState } from 'react';
import './CharacterList.scss';
import CharacterItem from './Item/CharacterItem';
import ListPlaceholder from './Placeholder/ListPlaceholder';

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setQuery] = useState('');

  const filter = { name: searchQuery };

  const { loading, data } = useCharacters({ filter, page: currentPage });

  return (
    <div className="characters">
      <div className="characters__topbar">
        <SearchInput onSubmit={setQuery} />
        <Pagination
          totalPages={data?.characters.info.pages}
          currentPage={currentPage}
          changePage={setCurrentPage}
        />
      </div>
      <div className="characters__grid">
        { loading ? <ListPlaceholder /> : data?.characters.results.map((character) => (
          <CharacterItem key={character.id} id={character.id} image={character.image} name={character.name} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
