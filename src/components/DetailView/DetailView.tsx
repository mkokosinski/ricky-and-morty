import Routes from 'components/AppRouter/Routes';
import useCharacterDetails from 'hooks/useCharacterDetails';
import { useHistory, useParams } from 'react-router';

const DetailView = () => {
  const { push } = useHistory();
  const { id } = useParams<{ id:string }>();

  const { loading, data } = useCharacterDetails(id);

  return (
    <div>
      <div>
        <button type="button" onClick={() => push(Routes.characterList)}>go back</button>
      </div>

      {loading || !data ? 'loading...' : (

        <div>
          <div>{data.character.name}</div>
          <div>{data.character.gender}</div>
          <div>{data.character.species}</div>
          <div>{data.character.status}</div>
          <div>
            {data.character.episode.map((e) => (
              <div key={e.name}>{e.name}</div>
            ))}

          </div>
        </div>

      )}
    </div>
  );
};

export default DetailView;
