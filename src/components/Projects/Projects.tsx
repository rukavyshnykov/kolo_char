import cl from './Projects.module.scss'
import van from '../../assets/van.jpg'

export const Projects = () => {
    return (
        <div className={cl.container}>
            <div className={cl.head}>
                <h2>Наші проєкти</h2>
                <div className={cl.line}></div>
                <div>
                    <button type='button'>Більше проєктів</button>
                    <button type='button'>Запропонувати проєкт</button>
                </div>
            </div>
            <div className={cl.content}>
                <div className={cl.item}>
                    <span className={cl.label}>Медицина</span>
                    <span className={cl.title}>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</span>
                    <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова.</span>
                    <div className={cl.image}>
                        <img src={van}/> 
                    </div>
                    <button type='button'>Дізнатись більше і підтримати</button>
                </div>
                <div className={cl.item}>
                    <span className={cl.label}>Медицина</span>
                    <span className={cl.title}>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</span>
                    <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова.</span>
                    <div className={cl.image}>
                        <img src={van}/> 
                    </div>
                    <button type='button'>Дізнатись більше і підтримати</button>
                </div>
                <div className={cl.item}>
                    <span className={cl.label}>Медицина</span>
                    <span className={cl.title}>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</span>
                    <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова.</span>
                    <div className={cl.image}>
                        <img src={van}/> 
                    </div>
                    <button type='button'>Дізнатись більше і підтримати</button>
                </div>
                <div className={cl.item}>
                    <span className={cl.label}>Медицина</span>
                    <span className={cl.title}>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</span>
                    <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова.</span>
                    <div className={cl.image}>
                        <img src={van}/> 
                    </div>
                    <button type='button'>Дізнатись більше і підтримати</button>
                </div>
                <div className={cl.item}>
                    <span className={cl.label}>Медицина</span>
                    <span className={cl.title}>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</span>
                    <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова.</span>
                    <div className={cl.image}>
                        <img src={van}/> 
                    </div>
                    <button type='button'>Дізнатись більше і підтримати</button>
                </div>
                <div className={cl.item}>
                    <span className={cl.label}>Медицина</span>
                    <span className={cl.title}>20 дронів AUTEL EVO 2 DUAL v2 Rugged Bundle</span>
                    <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова.</span>
                    <div className={cl.image}>
                        <img src={van}/> 
                    </div>
                    <button type='button'>Дізнатись більше і підтримати</button>
                </div>
            </div>
        </div>
    )
}