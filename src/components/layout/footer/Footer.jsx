import { Logo } from '../../ui';
import styles from './Footer.module.scss';
export const Footer = ({ name, logo }) => {
  return (
    <footer className={styles.footer}>
      <Logo clinicName={logo.clinicName} src={logo.src} />

      <p className={styles.copyright}>
        © 2026 {name}. Todos los derechos reservados.
      </p>
    </footer>
  );
};
