import { Chararter, ChararterLabels } from 'types/characterTypes';

import './DetailEpisodes.scss';

type Props = Pick<Chararter, 'episode'>;

const DetailEpisodes = ({ episode: episodes }: Props) => (
  <ul className="episodes">
    <div className="episodes__label">{ChararterLabels.episode.episode}</div>
    {episodes.map((episode) => (
      <li className="episode">
        <span className="episode__name">{episode.name}</span>
        <span className="episode__number">{episode.episode}</span>
      </li>
    ))}
  </ul>
);

export default DetailEpisodes;
