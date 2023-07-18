import Link from 'next/link';
import styles from '../styles/components/Header.module.css';
const Header = () => {
    return(
        <nav className="navbar container">
            <Link href="/">
                <a>
                    <div className={styles.logo}>
                        <p>
                            PLANTS <span className={styles.logo_span}>☘</span>
                        </p>
                    </div>
                </a>
            </Link>
            <div className="nav-price snipcart-checkout">
                <span>🛒</span>
                <p className="snipcart-total-price">$0.00</p>
            </div>
        </nav>
    );
  };

export default Header;