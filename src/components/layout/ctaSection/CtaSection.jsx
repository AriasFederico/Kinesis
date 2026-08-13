import { motion } from 'framer-motion';
import { HeroLayout } from '../../layout';
import { ButtonCta, IconLink, TopSection } from '../../ui';
import styles from './CtaSection.module.scss';

export const CtaSection = ({ data }) => {
  return (
    <HeroLayout bgVariant={'soft'}>
      <a className={styles.ctaSection} href={data.cta}>
        <div className={styles.container}>
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
          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            {data.text}
          </motion.p>

          <div className={styles.ctas}>
            <ButtonCta text={'Reservar mi sesión'} />
          </div>

          <div className={styles.rrss}>
            <p className={styles.rrssText}>SEGUINOS</p>
            <div className={styles.iconsContainer}>
              {data?.rrss?.map(({ icon, href }) => (
                <IconLink
                  key={icon}
                  icon={icon}
                  href={href}
                  className={styles.iconRss}
                />
              ))}
            </div>
          </div>
        </div>
      </a>
    </HeroLayout>
  );
};
