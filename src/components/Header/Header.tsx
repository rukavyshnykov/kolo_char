import cl from './Header.module.scss'
import logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <header className={cl.header}>
            <div className={cl.logo}>
                <img src={logo}/>
            </div>
            <nav className={cl.nav}>
                <a href='#'>Про Фонд</a>
                <a href='#'>Проекти</a>
                <a href='#'>Партнерам</a>
                <a href='#'>Банк ідей</a>
            </nav>
            <div>
                <button type='button' className={cl.button}>Підтримати</button>
            </div>
        </header>
    )
}