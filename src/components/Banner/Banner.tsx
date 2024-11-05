import cl from './Banner.module.scss'

export const Banner = () => {
    return (
        <div className={cl.container}>
            <span>
                Ми збираємо на військові потреби та наближаємо перемогу.
                Але й докладаємо зусилля для того, що відкладають на «вже після війни».
            </span>
        </div>
    )
}