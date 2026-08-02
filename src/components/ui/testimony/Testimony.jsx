import { motion } from 'framer-motion';
import { LuQuote } from 'react-icons/lu';
import styles from './Testimony.module.scss';

export const Testimony = ({ text, user, adjetive, duration }) => {
  return (
    <motion.div
      className={styles.testimony}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration }}
      viewport={{ once: true }}
    >
      <LuQuote className={styles.quote} />
      <p className={styles.text}>"{text}"</p>
      <div className={styles.userFlex}>
        <div className={styles.userContainer}>
          <p className={styles.userName}>{user}</p>
          <span className={styles.userAdjetive}>{adjetive}</span>
        </div>
      </div>
    </motion.div>
  );
};
