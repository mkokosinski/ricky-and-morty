import { useQuery, gql } from '@apollo/client';
import { ResponseType } from 'types/baseTypes';
import { Chararter } from 'types/characterTypes';

type List = {
  characters: ResponseType<Pick<Chararter, 'id' | 'image' | 'name' | 'species'>>;
};

const getCharacters = gql`
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

const useCharacters = ({ page = 1, filter }: { page: number; filter: { name: string } }) => {
  const { loading, error, data } = useQuery<List>(getCharacters, {
    variables: {
      page,
      filter,
    },
  });

  return { loading, error, data };
};

export default useCharacters;
