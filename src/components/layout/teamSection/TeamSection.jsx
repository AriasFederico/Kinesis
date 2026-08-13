import { SectionLayout } from '../../layout';
import { TopSection } from '../../ui';
import styles from './TeamSection.module.scss';
export const TeamSection = ({ data }) => {
  return (
    <SectionLayout bgVariant={'soft'}>
      <div className={styles.container}>
        <TopSection text={data.top_section} />
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.text}>{data.text}</p>
        <div className={styles.items}>
          {data?.items?.map((item) => (
            <div key={item.name} className={styles.item}>
              <h3 className={styles.name}>{item.name}</h3>
              <span className={styles.speciality}>{item.speciality}</span>
              <p className={styles.exp}>{item.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
