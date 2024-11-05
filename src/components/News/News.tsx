import cl from './News.module.scss'
import news from '../../assets/news.jpg'

export const News = () => {
    return (
        <div className={cl.container}>
            <div className={cl.head}>
                <h2>Новини</h2>
                <div className={cl.line}></div>
                <div>
                    <button type='button'>Більше новин</button>
                </div>
            </div>
            <div className={cl.content}>
                <div className={cl.item}>
                    <span className={cl.label}>17.01.2023</span>
                    <div className={cl.image}>
                        <img src={news}/>
                    </div>
                    <span className={cl.title}>ДСНС передано 3 реанімобілі в повній комплектаціїї відповідно до класу С</span>
                    <button type='button'>Прочитати</button>
                </div>
                <div className={cl.item}>
                    <span className={cl.label}>17.01.2023</span>
                    <div className={cl.image}>
                        <img src={news}/>
                    </div>
                    <span className={cl.title}>ДСНС передано 3 реанімобілі в повній комплектаціїї відповідно до класу С</span>
                    <button type='button'>Прочитати</button>
                </div>
                <div className={cl.item}>
                    <span className={cl.label}>17.01.2023</span>
                    <div className={cl.image}>
                        <img src={news}/>
                    </div>
                    <span className={cl.title}>ДСНС передано 3 реанімобілі в повній комплектаціїї відповідно до класу С</span>
                    <button type='button'>Прочитати</button>
                </div>
            </div>
        </div>
    )
}