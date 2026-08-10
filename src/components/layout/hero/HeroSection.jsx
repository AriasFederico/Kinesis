import { motion } from 'framer-motion';
import { ButtonCta, TopSection } from '../../ui';
import { HeroLayout } from '..';
import styles from './HeroSection.module.scss';
export const HeroSection = ({ data }) => {
  return (
    <HeroLayout bgImage>
      <div className={styles.container}>
        <TopSection text={data.topSection} />
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {data.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className={styles.text}
        >
          {data.text}
        </motion.p>
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.50 }}
        >
          {data.ctas?.map(({ text, variant, href }) => (
            <ButtonCta text={text} href={href} variant={variant} key={href} />
          ))}
        </motion.div>
      </div>
    </HeroLayout>
  );
};
