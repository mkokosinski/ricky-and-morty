import { useQuery, gql } from '@apollo/client';
import { Chararter } from 'types/characterTypes';

type ChararterDetail = {
  character: Chararter;
};

const getCharacter = gql`
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
        name
      }
    }
  }
`;

const useCharacterDetails = (id: string) => {
  const { loading, error, data } = useQuery<ChararterDetail>(getCharacter, {
    variables: {
      id,
    },
  });

  return { loading, error, data };
};

export default useCharacterDetails;
