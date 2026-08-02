import { motion } from 'framer-motion';
import { TopSection } from '../../ui';
import styles from './CtaSection.module.scss';

export const CtaSection = ({ data }) => {
  return (
    <a className={styles.ctaSection} href={data.cta}>
      <div className={styles.container}>
        {/* <TopSection text={data.topSection} /> */}
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {data.title}
        </motion.h1>
        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {data.text}
        </motion.p>
      </div>
    </a>
  );
};
