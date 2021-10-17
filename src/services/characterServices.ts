import api from 'api/api';
import { QueryVariables, ResponseType } from 'types/baseTypes';
import { Chararter, ChararterListItem } from 'types/characterTypes';

const GET_CHARACTER_QUERY = `
query getCharacter($id: ID!) {
    character(id: $id) {
      id
      image
      name
      species
      gender
      status
      location {
        name
      }
      episode {
        episode
        name
      }
    }
  }
`;
const get = async (id: string) : Promise<Chararter> => {
  const response = await api.post(GET_CHARACTER_QUERY, { id });
  return response.data.character;
};

const GET_CHARACTERS_PAGE_QUERY = `
query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        next
        pages
        prev
      }
      results {
        id
        image
        name
        species
      }
    }
  }
`;
const getPage = async ({ page, filter }: QueryVariables) : Promise<ResponseType<ChararterListItem>> => {
  const response = await api.post(GET_CHARACTERS_PAGE_QUERY, { page, filter });
  const { results, info } = response.data.characters;
  return { results, info };
};

export default {
  get,
  getPage,
};
