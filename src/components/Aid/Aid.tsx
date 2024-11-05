import cl from './Aid.module.scss'

export const Aid = () => {
    return (
        <div className={cl.container}>
            <h2 className={cl.heading}>
                Прийом гуманітарної допомоги у Польщі
            </h2>
            <p>Ви можете самі замовити необхідні речі за кордоном і відправити їх на один із наших складів у Польщі.</p>
            <p>Перелік того, що потрібно, за посиланням.</p>
            <div className={cl.content}>
                <div className={cl.item}>
                    <p>Адреса для відправки посилок з країн ЄС:</p>
                    <span>Etravel</span>
                    <span>Etravel</span>
                    <span>Etravel</span>
                    <span>Etravel</span>
                    <span>Etravel</span>
                </div>
                <div className={cl.item}>
                    <p>Адреса для відправки посилок з країн ЄС:</p>
                    <span>Etravel</span>
                    <span>Etravel</span>
                    <span>Etravel</span>
                    <span>Etravel</span>
                    <span>Etravel</span>
                </div>
            </div>
        </div>
    )
}