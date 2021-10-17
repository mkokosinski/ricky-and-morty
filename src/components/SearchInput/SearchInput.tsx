import {
  ChangeEvent, InputHTMLAttributes, SyntheticEvent, useState,
} from 'react';

import Input from 'components/common/Inputs/Input';

type Props = {
  onSubmit: (query: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onSubmit'>;

const SearchInput = ({ className = '', onSubmit, ...props }: Props) => {
  const [inputValue, setValue] = useState('');

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
    <form className={className} onSubmit={handleSubmit}>
      <Input {...props} type="search" value={inputValue} onChange={handleInputChange} onBlur={handleSubmit} />
    </form>
  );
};

export default SearchInput;
