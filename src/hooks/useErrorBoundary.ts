import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import Routes from 'components/AppRouter/Routes';
import { selectErrors } from 'store/slices/errorsSlice';

const useErrorBoundary = () => {
  const { push } = useHistory();
  const errors = useSelector(selectErrors);

  useEffect(() => {
    if (errors.isDataError) {
      push(Routes.errorPage);
    }
  }, [errors]);
};

export default useErrorBoundary;
