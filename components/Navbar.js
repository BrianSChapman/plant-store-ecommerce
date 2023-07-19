import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';
const Navbar = () => {
    return(
        <nav className={styles.navbar}>
            <Link href="/">
                    <div className={styles.logo}>
                        <p>
                            HORTICURIOUS
                        </p>
                    </div>
            </Link>
            <div className="nav-price snipcart-checkout">
                <span>🛒</span>
                <p className="snipcart-total-price">$0.00</p>
            </div>
        </nav>
    );
  };

export default Navbar;