import "../styles/layouts/Card.css"; // Importa o CSS específico para o Card

const VARIANT_MAP = {
  default: 'tg-card--default',
  primary: 'tg-card--primary',
  success: 'tg-card--success',
  warning: 'tg-card--warning',
  dark:    'tg-card--dark',
};

const PADDING_MAP = {
  none:   'tg-card--p-none',
  small:  'tg-card--p-sm',
  normal: 'tg-card--p-md',
  large:  'tg-card--p-lg',
};



const Card = ({ 
  children, 
  variant = 'default', 
  padding = 'normal', 
  hover = false, 
  clickable = false, 
  onClick,
  className = '' 
}) => {
  
  // Montagem dinâmica das classes
  const classes = [
    'tg-card',
    VARIANT_MAP[variant],
    PADDING_MAP[padding],
    hover ? 'tg-card--hover' : '',
    clickable ? 'tg-card--clickable' : '',
    className // Permite extensão externa
  ].join(' ').trim();

  return (
    <div className={classes} onClick={clickable ? onClick : undefined}>
      {children}
    </div>
  );
  
};

Card.Header = ({ children, className = '' }) => (
  <div className={`tg-card__header ${className}`}>{children}</div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`tg-card__body ${className}`}>{children}</div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`tg-card__footer ${className}`}>{children}</div>
);

export default Card;