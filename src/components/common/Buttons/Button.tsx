import { ButtonHTMLAttributes } from 'react';

import './Button.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children, className, type = 'button', ...props
}: Props) => (

  // eslint-disable-next-line react/button-has-type
  <button type={type} {...props} className={`button ${className}`}>
    {children}
  </button>
);

export default Button;
