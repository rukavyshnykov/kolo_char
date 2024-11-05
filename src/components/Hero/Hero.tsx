import cl from './Hero.module.scss'
import heroSpan from '../../assets/hero-span.png'

export const Hero = () => {
    return (
        <div className={cl.container}>
            <span>Благо<span className={cl.gradient}>дій</span>ний фонд</span>
            <div className={cl.flex}>
                <span>“КОЛО”</span>
                <div>
                    <img src={heroSpan}/>
                </div>
            </div>
            <button type='button' className={cl.button}>Підтримати</button>
        </div>
    )
}