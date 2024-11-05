import cl from './Directions.module.scss'

export const Directions = () => {
    return (
        <div className={cl.container}>
            <div className={cl.description}>
                <span className={cl.title}>Напрями діяльності</span>
                <span className={cl.subtitle}>З початком повномасштабної війни ми додали ще один напрям — безпеку.</span>
                <span className={cl.subtitle}>Зараз ми постачаємо нашим бійцям необхідне для ведення бою, а цивільним — гуманітарну підтримку та допомагаємо з евакуацією.</span>
                <button className={cl.button}>Дізнатись більше</button>
            </div>
            <div className={cl.tiles}>
                <div className={cl.tile + " " + cl.blue}>
                    <span className={cl.name}>Освіта</span>
                    <span className={cl.desc}>Впроваджуємо новації в освітні процеси, спрощуємо доступ до освіти та оснащуємо спеціалізовані заклади.</span>
                </div>
                <div className={cl.tile}>
                    <span className={cl.name}>Медицина</span>
                    <span className={cl.desc}>Впроваджуємо новації в освітні процеси, спрощуємо доступ до освіти та оснащуємо спеціалізовані заклади.</span>
                </div>
                <div className={cl.tile}>
                    <span className={cl.name}>Генератори</span>
                    <span className={cl.desc}>Впроваджуємо новації в освітні процеси, спрощуємо доступ до освіти та оснащуємо спеціалізовані заклади.</span>
                </div>
                <div className={cl.tile + " " + cl.blue}>
                    <span className={cl.name}>Культура</span>
                    <span className={cl.desc}>Впроваджуємо новації в освітні процеси, спрощуємо доступ до освіти та оснащуємо спеціалізовані заклади.</span>
                </div>
            </div>
        </div>
    )
}