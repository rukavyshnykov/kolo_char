import cl from './Bottom.module.scss'
import logo from '../../assets/logo-text.png'

export const Bottom = () => {
    return (
        <div className={cl.container}>
            <div className={cl.logo}>
                <img src={logo}/>
            </div>
            <div className={cl.links}>
                <span>Про Фонд</span>
                <span>Проекти</span>
                <span>Партнерам</span>
                <span>Банк ідей</span>
            </div>
            <div className={cl.info}>
                <span>kolo.fund@gmail.com</span>
                <span>+380 93 626 4209</span>
            </div>
            <div className={cl.buttons}>
                <button>Підтримати</button>
                <button>Документи</button>
            </div>
        </div>
    )   
}