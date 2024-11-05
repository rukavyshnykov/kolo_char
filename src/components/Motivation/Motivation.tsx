import cl from './Motivation.module.scss'
import motivation from '../../assets/motivation.jpg'

export const Motivation = () => {
    return (
        <div className={cl.container}>
            <div className={cl.heading}>
                <h2>Що нас мотивує</h2>
                <div className={cl.line}/>
            </div>
            <div className={cl.content}>
                <span className={cl.description}>Наше завдання - створити умови, аби зустрілися ті, хто хоче допомогти, з тими, хто потребує допомоги.</span>
                <div className={cl.motivation}>
                    <div className={cl.items}>
                        <div className={cl.item}>
                            <span className={cl.title}>Допомога</span>
                            <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова ідея про засудження задоволення.</span>
                        </div>
                        <div className={cl.item}>
                            <span className={cl.title}>Патріотизм</span>
                            <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова ідея про засудження задоволення.</span>
                        </div>
                    </div>
                    <div className={cl.imageWrapper}>
                        <img src={motivation}/>
                        <button type='button'>Більше
                        про фонд</button>
                    </div>
                    <div className={cl.items}>
                        <div className={cl.item}>
                            <span className={cl.title}>Допомога</span>
                            <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова ідея про засудження задоволення.</span>
                        </div>
                        <div className={cl.item}>
                            <span className={cl.title}>Патріотизм</span>
                            <span className={cl.subtitle}>Lorem: Але я повинен пояснити вам, як народилася вся ця помилкова ідея про засудження задоволення.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}