import './NoResults.scss';

type Props = {
  message?: string
};

const NoResults = ({ message = 'No results' }:Props) => (
  <div className="no-results">
    {message}
  </div>
);

export default NoResults;
