import { Testimony, TopSection } from '../../ui';
import { SectionLayout } from '..';
import styles from './Testimonies.module.scss';
export const Testimonies = ({ data }) => {
  return (
    <SectionLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={data.topSection} />
          <h2 className={styles.title}>{data.title}</h2>
        </div>

        <div className={styles.items}>
          {data?.items?.map((e, index) => (
            <Testimony
              key={e.index}
              text={e.text}
              user={e.user}
              adjetive={e.adjetive}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
