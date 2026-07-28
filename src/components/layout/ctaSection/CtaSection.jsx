import { TopSection } from '../../ui';
import styles from './CtaSection.module.scss';

export const CtaSection = ({ data }) => {
  return (
    <a className={styles.ctaSection} href={data.cta}>
      <div className={styles.container}>
        {/* <TopSection text={data.topSection} /> */}
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.text}>{data.text}</p>
      </div>
    </a>
  );
};
