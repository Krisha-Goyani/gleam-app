import React, { ReactNode } from 'react';

interface ButtonProps {
  text: string | ReactNode;
  className: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;