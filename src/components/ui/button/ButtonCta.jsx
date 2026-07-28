import { iconMap } from '../../../iconMap';
import styles from './ButtonCta.module.scss';
export const ButtonCta = ({
  text,
  icon,
  onCLick,
  href,
  type = 'button',
  variant = 'primary',
  size = 'md',
}) => {
  // Si tiene 'href', es un enlace. Si no, es un botón.
  const Component = href ? 'a' : 'button';
  const Icon = iconMap[icon];

  return (
    <Component
      href={href}
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onCLick}
      type={!href ? type : undefined} // Solo para botones
    >
      {Icon && <Icon className={styles.icon} />}
      {text || 'Click aquí'}
    </Component>
  );
};
