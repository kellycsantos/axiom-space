import Logo from '../../assets/axiom-space-logo-file_wht-01.png'
import styles from './navbar.module.scss'

export default function Navbar(){

    return(
        <nav id={styles.navbar}>
            <img src={Logo} alt='Axiom Space' />

            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">planets</a></li>
                <li><a href="#">tickets</a></li>
                <li><a href="#">help</a></li>
                <li><a href="#">about</a></li>
            </ul>
        </nav>
    )
}