import styles from './Logo.module.scss';

export const Logo = ({
  src,
  className,
  classNameText,
  clinicName,
  secondName,
}) => {
  return (
    <a href='/' type='button' className={styles.logo}>
      {/* <img
        src={src}
        alt={clinicName}
        className={`${styles.img} ${className}`}
      /> */}
      <div className={styles.itemsFlex}>
        <p className={`${styles.clinicName} ${classNameText}`}>{clinicName}</p>
        {secondName && <span className={styles.secondName}>{secondName}</span>}
      </div>
    </a>
  );
};
