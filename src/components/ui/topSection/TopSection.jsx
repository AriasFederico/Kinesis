import { iconMap } from '../../../iconMap';
import styles from './TopSection.module.scss';

export const TopSection = ({
  text,
  iconLeft,
  iconRight,
  className = '',
  iconLeftClassName = '',
  iconRightClassName = '',
}) => {
  const IconLeft = iconMap[iconLeft];
  const IconRight = iconMap[iconRight];
  return (
    <div className={`${styles.topSection} ${className}`}>
      {IconLeft && <IconLeft className={iconLeftClassName} />}
      <span className={styles.text}>{text}</span>
      {IconRight && <IconRight className={iconRightClassName} />}
    </div>
  );
};
