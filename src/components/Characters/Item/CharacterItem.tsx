import { Link } from 'react-router-dom';

import { ChararterListItem } from 'types/characterTypes';

import './CharacterItem.scss';

type Props = ChararterListItem;

const CharacterItem = ({
  id, image, name, species,
}: Props) => (
  <Link className="character" to={`/ricky-and-morty/detail/${id}`} key={id}>
    <img src={image} alt={name} loading="lazy" />
    <div className="character__label">
      <span className="character__name">{name}</span>
      <span className="character__species">{species}</span>
    </div>
  </Link>
);

export default CharacterItem;
