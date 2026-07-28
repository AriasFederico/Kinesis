import { iconMap } from '../../../iconMap';
import { ButtonCta, MapComponent, TopSection } from '../../ui';
import { SectionLayout } from '../';
import styles from './LocationSection.module.scss';

export const LocationSection = ({ data }) => {
  const { card } = data;
  const { cta } = card;
  return (
    <SectionLayout id={'location'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <TopSection text={data.topSection} />
          <h2 className={styles.title}>{data.title}</h2>
        </div>
        <div className={styles.locationMap}>
          <div className={styles.locationCard}>
            <TopSection text={card.topSection} />
            <div className={styles.locationItem}>
              {card?.data?.map(({ title, text, icon }) => {
                const IconComponent = iconMap[icon];
                return (
                  <div className={styles.item} key={title}>
                    <IconComponent size={18} className={styles.icon} />
                    <div className={styles.flex}>
                      <p>{title}</p>
                      <span>{text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <ButtonCta text={cta.text} href={cta.href} />
          </div>
          <MapComponent coordenates={data.coordenatesMap} />
        </div>
      </div>
    </SectionLayout>
  );
};
