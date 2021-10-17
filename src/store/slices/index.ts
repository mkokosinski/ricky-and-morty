import CharactersSlice from './charactersSlice';
import DetailSlice from './detailSlice';
import ErrorsSlice from './errorsSlice';

const rootReducer = {
  characters: CharactersSlice,
  detail: DetailSlice,
  errors: ErrorsSlice,
};

export default rootReducer;
