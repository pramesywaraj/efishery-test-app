import { Link, NavLink } from 'react-router-dom';

import Logo from '@assets/images/logo-1.svg';
import styles from './styles.module.scss';

const Navbar = () => {
  const checkIfRouteActive = ({ isActive }) => {
    return isActive && styles['selected'];
  };

  return (
    <nav className={styles['navigation-container']}>
      <div className={styles['navigation-logo-wrapper']}>
        <img src={Logo} alt="eFishery Logo" className={styles['navigation-logo-image']} />
        <Link to="/">eFishery Test App</Link>
      </div>
      <div className={styles['navigation-links-wrapper']}>
        <NavLink to="/" className={checkIfRouteActive}>
          Daftar Produk
        </NavLink>
        {/* <NavLink to="input-item" className={checkIfRouteActive}>
          Tambah Produk
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
