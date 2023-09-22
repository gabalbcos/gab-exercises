import styles from './Exercises.module.scss';
import logo from 'assets/vecteezy-logo.jpg'

export default function Exercises() {
    return(
        <main>
            <nav className={styles.muscleGroup}>
                <img className={styles.logo} src={logo} alt="Logo for Gab Gym"/>
            </nav>
                <header className={styles.header}>
                    <div className={styles.header__text}>
                         Tough times never last... Only tough people last...
                    </div>
                </header>
        </main>
    )
}
