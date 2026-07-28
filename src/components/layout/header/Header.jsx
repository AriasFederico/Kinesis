import { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { ButtonCta, Logo } from '../../ui'; // importar donde esté
import styles from './Header.module.scss';

export const Header = ({ data, logo }) => {
  const { nav_links, cta } = data;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const BurgerIcon = isOpen ? BsX : BsList;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        // cambiar el tamaño del maxwidth del header
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo clinicName={data.clinicName} src={logo.src} size={'sm'} />

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          {nav_links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </a>
          ))}
          <div className={styles.ctaMobile}>
            <ButtonCta
              size='sm'
              onCLick={() => setIsOpen(false)}
              text={cta.text}
            />
          </div>
        </nav>

        <div className={styles.cta}>
          <ButtonCta size='sm' text={cta.text} />
        </div>

        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label='Menu'
          type='button'
        >
          <BurgerIcon className={styles.icon} />
        </button>
      </div>
    </header>
  );
};
