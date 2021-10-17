import Pagination from 'components/Pagination/Pagination';
import SearchInput from 'components/SearchInput/SearchInput';
import useCharacters from 'hooks/useCharacters';
import { useMemo, useState } from 'react';
import { RequestStatus } from 'types/baseTypes';
import './Characters.scss';
import CharacterItem from './Item/CharacterItem';
import CharactersList from './List/CharactersList';
import ListPlaceholder from './Placeholder/ListPlaceholder';

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setQuery] = useState('');

  const filter = useMemo(() => ({ name: searchQuery }), [searchQuery]);
  const { status, data, info } = useCharacters({ filter, page: currentPage });

  const isLoading = [RequestStatus.idle, RequestStatus.pending].includes(status);

  return (
    <div className="characters">
      <div className="characters__topbar">
        <SearchInput className="characters__search" placeholder="Search..." onSubmit={setQuery} />
        <Pagination totalPages={info?.pages} currentPage={currentPage} changePage={setCurrentPage} />
      </div>
      <div className="characters__grid">
        {isLoading ? (
          <ListPlaceholder />
        ) : (
          <CharactersList characters={data} />
        )}
      </div>
    </div>
  );
};

export default Characters;
