import { InputHTMLAttributes } from 'react';

type Props = {
  test? : string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ name, type = 'text', ...inputProps }: Props) => (
  <input type={type} {...inputProps} />
);
