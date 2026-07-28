import { LuQuote } from 'react-icons/lu';
import styles from './Testimony.module.scss';

export const Testimony = ({ text, user, adjetive }) => {
  return (
    <div className={styles.testimony}>
      <LuQuote className={styles.quote} />
      <p className={styles.text}>"{text}"</p>
      <div className={styles.userFlex}>
        <div className={styles.userContainer}>
          <p className={styles.userName}>{user}</p>
          <span className={styles.userAdjetive}>{adjetive}</span>
        </div>
      </div>
    </div>
  );
};
