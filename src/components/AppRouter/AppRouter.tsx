import CharacterList from 'components/CharacterList/CharacterList';
import DetailView from 'components/DetailView/DetailView';
import { Route, Switch } from 'react-router';
import Routes from './Routes';
import 'styles/_index.scss';

const Root = () => (
  <Switch>
    <Route path={Routes.characterDetail}>
      <DetailView />
    </Route>
    <Route path={Routes.characterList}>
      <CharacterList />
    </Route>
  </Switch>
);

export default Root;
