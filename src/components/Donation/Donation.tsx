import cl from './Donation.module.scss'

export const Donation = () => {
    return (
        <div className={cl.container}>
            <h2>Зробити благодійний внесок можна карткою або за реквізитами</h2>
            <div>
                <button type='button'>Підтримати</button>
                <button type='button'>Деталі рахунків</button>
            </div>
            <div className={cl.content}>
                <div className={cl.row}>
                    <span>Отримувач:</span>
                    <span>Благодійна організація «Благодійний фонд «КОЛО»</span>
                </div>
                <div className={cl.row}>
                    <span>Отримувач:</span>
                    <span>Благодійна організація «Благодійний фонд «КОЛО»</span>
                </div>
                <div className={cl.row}>
                    <span>Отримувач:</span>
                    <span>Благодійна організація «Благодійний фонд «КОЛО»</span>
                </div>
                <div className={cl.row}>
                    <span>Отримувач:</span>
                    <span>Благодійна організація «Благодійний фонд «КОЛО»</span>
                </div>
                <div className={cl.row}>
                    <span>Отримувач:</span>
                    <span>Благодійна організація «Благодійний фонд «КОЛО»</span>
                </div>
                <div className={cl.row}>
                    <span>Отримувач:</span>
                    <span>Благодійна організація «Благодійний фонд «КОЛО»</span>
                </div>
                <div className={cl.row}>
                    <span>Отримувач:</span>
                    <span>Благодійна організація «Благодійний фонд «КОЛО»</span>
                </div>
            </div>
        </div>
    )
}