import styles from './Button.module.css';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  text: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, className, text }) => {
  const buttonClass = className ? `${styles[className]}` : '';
  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

export default Button;
