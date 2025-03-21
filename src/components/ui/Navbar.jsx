import { Link } from 'react-router-dom'
import { Share } from '../../components'
import styles from '../../styles/Navbar.module.css'
import logoArtech from '/assets/artech.png'

export function NavBar() {
    return (
        <header className={styles.nabvar}>
            <Link to='/'>
                <img src={logoArtech} alt='Logo de Artech' width={130} />
            </Link>
            <Share />
            <div className={styles.navbarFondo}></div>
        </header>
    )
}