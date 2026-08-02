import { motion } from 'framer-motion';
import { Testimony, TopSection } from '../../ui';
import { SectionLayout } from '..';
import styles from './Testimonies.module.scss';
export const Testimonies = ({ data }) => {
  return (
    <SectionLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={data.topSection} />
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {data.title}
          </motion.h2>
        </div>

        <div className={styles.items}>
          {data?.items?.map((e, index) => (
            <Testimony
              key={e.index}
              text={e.text}
              user={e.user}
              adjetive={e.adjetive}
              duration={e.duration}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
