import { TopSection } from '../../ui/';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './ServicesSection.module.scss';

export const ServicesSection = ({ data }) => {
  return (
    <SectionLayout id={'services'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={data.topSection} />
          <h2 className={styles.title}>{data.title}</h2>
          <p>{data.text}</p>
        </div>

        <div className={styles.items}>
          {data?.items.map(({ id, title, text, src }) => (
            <div className={styles.item} key={id}>
              <span className={styles.id}>{id}</span>
              <div className={styles.info}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.description}>{text}</p>
              </div>
              <div className={styles.media}>
                <img src={src} alt={title} className={styles.image} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
