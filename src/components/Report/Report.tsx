import cl from './Report.module.scss'
import photo from '../../assets/photo.jpg'

export const Report = () => {
    return (
        <div className={cl.container}>
            <h2 className={cl.heading}>Фотозвіти</h2>
            <div className={cl.head}>
                <span>
                    Ви також можете подивитись детальну фінансову звітність за реалізованими проєктами.
                </span>
                <button type='button'>Подивитись звітність</button>
            </div>
            <div className={cl.content}>
                <div className={cl.item}>
                    <div className={cl.image}>
                        <img src={photo}/>
                    </div>
                    <div className={cl.flex}>
                        <p>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</p>
                        <div className={cl.col}>
                            <span>18.01.2022</span>
                            <span>$29 962</span>
                        </div>
                    </div>
                </div>
                <div className={cl.item}>
                    <div className={cl.image}>
                        <img src={photo}/>
                    </div>
                    <div className={cl.flex}>
                        <p>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</p>
                        <div className={cl.col}>
                            <span>18.01.2022</span>
                            <span>$29 962</span>
                        </div>
                    </div>
                </div>
                <div className={cl.item}>
                    <div className={cl.image}>
                        <img src={photo}/>
                    </div>
                    <div className={cl.flex}>
                        <p>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</p>
                        <div className={cl.col}>
                            <span>18.01.2022</span>
                            <span>$29 962</span>
                        </div>
                    </div>
                </div>
                <div className={cl.item}>
                    <div className={cl.image}>
                        <img src={photo}/>
                    </div>
                    <div className={cl.flex}>
                        <p>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</p>
                        <div className={cl.col}>
                            <span>18.01.2022</span>
                            <span>$29 962</span>
                        </div>
                    </div>
                </div>
                <div className={cl.item}>
                    <div className={cl.image}>
                        <img src={photo}/>
                    </div>
                    <div className={cl.flex}>
                        <p>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</p>
                        <div className={cl.col}>
                            <span>18.01.2022</span>
                            <span>$29 962</span>
                        </div>
                    </div>
                </div>
                <div className={cl.item}>
                    <div className={cl.image}>
                        <img src={photo}/>
                    </div>
                    <div className={cl.flex}>
                        <p>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</p>
                        <div className={cl.col}>
                            <span>18.01.2022</span>
                            <span>$29 962</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}