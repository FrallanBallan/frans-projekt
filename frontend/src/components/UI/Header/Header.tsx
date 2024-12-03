import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import CartIcon from '../CartIcon/CartIcon';

const Header = () => {
  //Uselocation?
  return (
    <header className={styles.header}>
      <Link to='/'>
        <h1>Warhammer Store</h1>
      </Link>
      <nav>
        <Link to={'/search'}>Search</Link>
        <Link to={`/faction`}>Factions</Link>
        <Link to='/cart'>
          <CartIcon />
        </Link>
        {/* <Link to={`/unit/:id`}>Unit</Link> */}
      </nav>
    </header>
  );
};

export default Header;
