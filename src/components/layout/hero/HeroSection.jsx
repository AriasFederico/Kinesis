import { ButtonCta, TopSection } from '../../ui';
import { HeroLayout } from '..';
import styles from './HeroSection.module.scss';
export const HeroSection = ({ data }) => {
  return (
    <HeroLayout bgImage>
      <div className={styles.container}>
        <TopSection text={data.topSection} />
        <h1 className={styles.title}>{data.title}</h1>
        <p>{data.text}</p>
        <div className={styles.ctas}>
          {data.ctas?.map(({ text, variant, href }) => (
            <ButtonCta text={text} href={href} variant={variant} key={href} />
          ))}
        </div>
      </div>
    </HeroLayout>
  );
};
