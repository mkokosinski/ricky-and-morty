import CharacterList from 'components/CharacterList/CharacterList';
import DetailView from 'components/DetailView/DetailView';
import ErrorPage from 'components/Errors/ErrorPage';
import useErrorBoundary from 'hooks/useErrorBoundary';
import { Route, Switch } from 'react-router';
import Routes from './Routes';

const Root = () => {
  useErrorBoundary();
  return (
    <Switch>
      <Route path={Routes.characterDetail}>
        <DetailView />
      </Route>
      <Route path={Routes.errorPage}>
        <ErrorPage />
      </Route>

      <Route path={Routes.characterList}>
        <CharacterList />
      </Route>
    </Switch>
  );
};

export default Root;
