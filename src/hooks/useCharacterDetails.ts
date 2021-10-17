import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail, selectDetail } from 'store/slices/detailSlice';

const useCharacterDetails = (id: string) => {
  const dispatch = useDispatch();
  const {
    status, data, error,
  } = useSelector(selectDetail);

  useEffect(() => {
    dispatch(fetchDetail(id));
  }, [id]);

  return {
    status,
    data,
    error,
  };
};

export default useCharacterDetails;
