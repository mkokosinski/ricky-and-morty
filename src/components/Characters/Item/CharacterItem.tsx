import { Link } from 'react-router-dom';

import './CharacterItem.scss';

type Props = {
  id: string,
  image: string,
  name: string
};

const CharacterItem = ({ id, image, name } : Props) => (
  <Link className="character" to={`/detail/${id}`} key={id}>
    <img src={image} alt={name} loading="lazy" />
    {name}
  </Link>
);

export default CharacterItem;
