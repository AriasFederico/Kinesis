import { SectionLayout } from '../../layout';
import { TopSection } from '../../ui';
import styles from './CoverageSection.module.scss';

export const CoverageSection = ({ data }) => {
  return (
    <SectionLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={data.top_section} />
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>

        <div className={styles.items}>
          {data?.items?.map((e, index) => (
            <p className={styles.coverage} key={index}>
              {e.toUpperCase()}
            </p>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
