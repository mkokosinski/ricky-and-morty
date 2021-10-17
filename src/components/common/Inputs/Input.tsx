import { InputHTMLAttributes } from 'react';
import './Input.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = ({
  className = '', name, type = 'text', ...inputProps
}: Props) => (
  <input className={`input ${className}`} type={type} name={name} id={name} {...inputProps} />
);

export default Input;
