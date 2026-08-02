import { motion } from 'framer-motion';
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
    <motion.div
      className={`${styles.topSection} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {IconLeft && <IconLeft className={iconLeftClassName} />}
      <span className={styles.text}>{text}</span>
      {IconRight && <IconRight className={iconRightClassName} />}
    </motion.div>
  );
};
