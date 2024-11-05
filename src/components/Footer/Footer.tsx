import cl from './Footer.module.scss'
import ficus from '../../assets/ficus.svg'

export const Footer = () => {
    return (
        <div className={cl.container}>
            <span>
                © 2023 KOLO. ALL RIGHTS RESERVED.
            </span>
            <div>
                <span>Created by:</span>
                <img src={ficus}/>
            </div>
            <button></button>
        </div>
    )
}