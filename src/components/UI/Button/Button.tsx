import block from 'bem-cn';
import cx from 'classnames';
import { ButtonType } from './Button.type';
import './Button.scss';

export const Button = ({
  text,
  type,
  onClick = () => {},
  loading = false,
  ...props
}: ButtonType) => {
  const b = block('Button');

  const buttonClassName = cx(b(), b({ modifier: type }));

  return (
    <button className={buttonClassName} onClick={onClick} {...props}>
      {text}
    </button>
  );
};
