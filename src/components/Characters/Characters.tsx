import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';

import SearchInput from 'components/SearchInput/SearchInput';
import Pagination from 'components/Pagination/Pagination';

import useCharacters from 'hooks/useCharacters';
import { RequestStatus } from 'types/baseTypes';

import CharactersList from './List/CharactersList';
import ListPlaceholder from './Placeholder/ListPlaceholder';

import './Characters.scss';

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setQuery] = useState('');

  const filter = useMemo(() => ({ name: searchQuery }), [searchQuery]);
  const { status, data, info } = useCharacters({ filter, page: currentPage });

  const isLoading = [RequestStatus.idle, RequestStatus.pending].includes(status);

  return (
    <>
      <Helmet>
        <title>R&M | Characters</title>
      </Helmet>
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
    </>
  );
};

export default Characters;
