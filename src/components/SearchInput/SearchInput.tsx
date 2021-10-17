import {
  ChangeEvent, SyntheticEvent, useState,
} from 'react';

type Props = {
  onSubmit: (query: string)=>void
};

const SearchInput = ({ onSubmit }: Props) => {
  const [inputValue, setValue] = useState('');
  const test = 'sad';

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(inputValue);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="search" value={inputValue} onChange={handleInputChange} onBlur={handleSubmit} />
        </form>
        {test}
      </div>
    </div>
  );
};

export default SearchInput;
