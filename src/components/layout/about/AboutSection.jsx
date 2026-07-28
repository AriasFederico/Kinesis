import { TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './AboutSection.module.scss';

export const AboutSection = ({ data }) => {
  return (
    <SectionLayout id={'about'}>
      <div className={styles.media}>
        <img src={data.src} alt={data.title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <TopSection text={' - FILOSOFÍA'} />
        <h2 className={styles.title}>{data.title}</h2>
        {data?.text?.map((e, index) => (
          <p key={index} className={styles.text}>
            {e}
          </p>
        ))}
      </div>
    </SectionLayout>
  );
};
