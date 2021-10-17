import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters, selectCharacters } from 'store/slices/charactersSlice';
import { QueryVariables } from 'types/baseTypes';

const useCharacters = ({ page = 1, filter }: QueryVariables) => {
  const dispatch = useDispatch();
  const {
    status, data, error, info,
  } = useSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharacters({ page, filter }));
  }, [page, filter]);

  return {
    status, data, error, info,
  };
};

export default useCharacters;
