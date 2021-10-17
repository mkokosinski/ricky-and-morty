import Routes from 'components/AppRouter/Routes';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectErrors } from 'store/slices/errorsSlice';

import './ErrorPage.scss';

const ErrorPage = () => {
  const { messages } = useSelector(selectErrors);
  const { push } = useHistory();

  const gotoHome = () => {
    push(Routes.characters);
  };

  useEffect(() => {
    if (!messages.length) {
      gotoHome();
    }
  }, [messages]);

  return (
    <div className="error-page">
      <strong className="error-page__header">Ups! Something went wrong :(</strong>

      <div className="error-page__details">
        Details:
        <ul>
          {messages.map((message) => (
            <li>
              {message}
            </li>
          ))}
        </ul>

      </div>

      <div>
        <button type="button" onClick={gotoHome}>
          Go to home page
        </button>
        <a href="mailto:mkokosinski91@gmail.com">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
