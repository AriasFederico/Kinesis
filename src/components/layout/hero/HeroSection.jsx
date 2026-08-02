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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {data.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {data.text}
        </motion.p>
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {data.ctas?.map(({ text, variant, href }) => (
            <ButtonCta text={text} href={href} variant={variant} key={href} />
          ))}
        </motion.div>
      </div>
    </HeroLayout>
  );
};
