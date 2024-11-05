import cl from './Partners.module.scss'
import eva from '../../assets/eva.png'

export const Partners = () => {
    return (
        <div className={cl.container}>
            <span>Партнери, які завжди підтримують наші проєкти</span>
            <div className={cl.partners}>
                <div className={cl.partner}>
                    <img src={eva}/>
                </div>
                <div className={cl.partner}>
                    <img src={eva}/>
                </div>
                <div className={cl.partner}>
                    <img src={eva}/>
                </div>
                <div className={cl.partner}>
                    <img src={eva}/>
                </div>
                <div className={cl.partner}>
                    <img src={eva}/>
                </div>
                <div className={cl.partner}>
                    <img src={eva}/>
                </div>
            </div>
        </div>
    )
}