import styles from '../styles/Nav.module.css';

function Nav() {
  return (
    <>
      <ol className={styles['nav-container']}>
        <li className={styles['nav-item']} key="home">
          home
        </li>
        <li className={styles['nav-item']} key="contact">
          contact
        </li>
      </ol>
    </>
  );
}
export default Nav;
