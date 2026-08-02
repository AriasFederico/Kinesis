import { motion } from 'framer-motion';
import { TopSection } from '../../ui/';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './ServicesSection.module.scss';

export const ServicesSection = ({ data }) => {
  return (
    <SectionLayout id={'services'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={data.topSection} />
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            {data.title}
          </motion.h2>
        </div>

        <div className={styles.items}>
          {data?.items.map(({ id, title, text, src, duration }) => (
            <motion.div
              className={styles.item}
              key={id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: duration }}
              viewport={{ once: true }}
            >
              <span className={styles.id}>{id}</span>
              <div className={styles.info}>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.description}>{text}</p>
              </div>
              <div className={styles.media}>
                <img src={src} alt={title} className={styles.image} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
