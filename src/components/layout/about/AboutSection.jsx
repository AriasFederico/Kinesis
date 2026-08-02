import { motion } from 'framer-motion';
import { TopSection } from '../../ui';
import { SectionLayout } from '../section_layout/SectionLayout';
import styles from './AboutSection.module.scss';

export const AboutSection = ({ data }) => {
  return (
    <SectionLayout id={'about'}>
      <div className={styles.media}>
        <motion.img
          src={data.src}
          alt={data.title}
          className={styles.image}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
      <div className={styles.content}>
        <TopSection text={' - FILOSOFÍA'} />
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {data.title}
        </motion.h2>
        {data?.text?.map((e, index) => (
          <motion.p
            key={index}
            className={styles.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            {e}
          </motion.p>
        ))}
      </div>
    </SectionLayout>
  );
};
