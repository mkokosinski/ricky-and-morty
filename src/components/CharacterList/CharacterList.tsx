import Pagination from 'components/Pagination/Pagination';
import SearchInput from 'components/SearchInput/SearchInput';
import useCharacters from 'hooks/useCharacters';
import { useMemo, useState } from 'react';
import { RequestStatus } from 'types/baseTypes';
import './CharacterList.scss';
import CharacterItem from './Item/CharacterItem';
import ListPlaceholder from './Placeholder/ListPlaceholder';

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setQuery] = useState('');

  const filter = useMemo(() => ({ name: searchQuery }), [searchQuery]);
  const { status, data, info } = useCharacters({ filter, page: currentPage });

  const isLoading = [RequestStatus.idle, RequestStatus.pending].includes(status);

  return (
    <div className="characters">
      <div className="characters__topbar">
        <SearchInput onSubmit={setQuery} />
        <Pagination totalPages={info?.pages} currentPage={currentPage} changePage={setCurrentPage} />
      </div>
      <div className="characters__grid">
        {isLoading ? (
          <ListPlaceholder />
        ) : (
          data!.map((character) => (
            <CharacterItem key={character.id} id={character.id} image={character.image} name={character.name} />
          ))
        )}
      </div>
    </div>
  );
};

export default CharacterList;
