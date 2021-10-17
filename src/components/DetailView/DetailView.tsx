import Routes from 'components/AppRouter/Routes';
import useCharacterDetails from 'hooks/useCharacterDetails';
import { useHistory, useParams } from 'react-router';

const DetailView = () => {
  const { push } = useHistory();
  const { id } = useParams<{ id:string }>();

  const { data: character } = useCharacterDetails(id);

  if (!character) {
    return null;
  }

  return (
    <div>
      <div>
        <button type="button" onClick={() => push(Routes.characterList)}>go back</button>
      </div>

      <div>
        <div>{character.name}</div>
        <div>{character.gender}</div>
        <div>{character.species}</div>
        <div>{character.status}</div>
        <div>
          {character.episode.map((e) => (
            <div key={e.name}>{e.name}</div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default DetailView;
