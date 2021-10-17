import { useHistory, useParams } from 'react-router';
import { ReactComponent as Arrow } from 'assets/icons/arrow.svg';

import Button from 'components/common/Buttons/Button';
import Routes from 'components/AppRouter/Routes';

import useCharacterDetails from 'hooks/useCharacterDetails';
import { ChararterLabels } from 'types/characterTypes';

import DetailEpisodes from './Episodes/DetailEpisodes';
import DetailPanel from './Panel/DetailPanel';

import './DetailView.scss';

const DetailView = () => {
  const { push } = useHistory();
  const { id } = useParams<{ id: string }>();

  const { data: character } = useCharacterDetails(id);

  if (!character) {
    return null;
  }

  return (
    <div className="detail-view">
      <div className="detail-view__topbar">
        <Button type="button" onClick={() => push(Routes.characters)}>
          <Arrow className="detail-view__arrow" />
        </Button>
      </div>

      <div className="detail-view__description">
        <div className="detail-view__image">
          <img src={character.image} alt="" />
        </div>

        <DetailPanel label={ChararterLabels.name} value={character.name} />
        <DetailPanel label={ChararterLabels.gender} value={character.gender} />
        <DetailPanel label={ChararterLabels.species} value={character.species} />
        <DetailPanel label={ChararterLabels.status} value={character.status} />
        <DetailPanel label={ChararterLabels.location.name} value={character.location.name} />
      </div>
      <div className="detail-view__episodes">
        <DetailEpisodes episode={character.episode} />
      </div>
    </div>
  );
};

export default DetailView;
