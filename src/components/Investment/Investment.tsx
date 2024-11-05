import cl from './Investment.module.scss'

export const Investment = () => {
    return (
        <div className={cl.container}>
            <div className={cl.head}>
                <div className={cl.section}>
                    <span className={cl.desc}>
                        Обертаємо коло тут і зараз. І даємо можливість побачити твій внесок в дії
                    </span>
                    <div className={cl.label}>
                        <span>Мінімальний внесок:</span>
                        <span>15 грн.</span>
                    </div>
                </div>
                <div className={cl.section}>
                    <span className={cl.desc}>
                        Понад 8 років робимо масштабні проєкти у сферах медицини, культури та освіти. Бо це стовпи сильної держави.
                    </span>
                    <div className={cl.label}>
                        <span>Максимальний внесок:</span>
                        <span>154000 грн.</span>
                    </div>
                </div>
            </div>
            <div className={cl.content}>
                <div className={cl.contentHead}>
                    <span className={cl.title}>Результати роботи під час повномасштабної війни</span>
                    <button type='button'>Детальна звітність</button>
                </div>
                <div className={cl.tiles}>
                    <div className={cl.tile}>
                        <span>
                            Евакуювали людей
                        </span>
                        <span>
                            4000
                        </span>
                    </div>
                    <div className={cl.tile}>
                        <span>
                            Евакуювали людей
                        </span>
                        <span>
                            4000
                        </span>
                    </div>
                    <div className={cl.tile}>
                        <span>
                            Евакуювали людей
                        </span>
                        <span>
                            4000
                        </span>
                    </div>
                    <div className={cl.tile}>
                        <span>
                            Евакуювали людей
                        </span>
                        <span>
                            4000
                        </span>
                    </div>
                    <div className={cl.tile}>
                        <span>
                            Евакуювали людей
                        </span>
                        <span>
                            4000
                        </span>
                    </div>
                    <div className={cl.tile}>
                        <span>
                            Евакуювали людей
                        </span>
                        <span>
                            4000
                        </span>
                    </div>
                    <div className={cl.tile}>
                        <span>
                            Евакуювали людей
                        </span>
                        <span>
                            4000
                        </span>
                    </div>
                    <div className={cl.tile}>
                        <span>
                            Евакуювали людей
                        </span>
                        <span>
                            4000
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}