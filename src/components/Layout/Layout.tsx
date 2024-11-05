import { Aid } from "../Aid/Aid"
import { Banner } from "../Banner/Banner"
import { Bottom } from "../Bottom/Bottom"
import { Directions } from "../Directions/Directions"
import { Donation } from "../Donation/Donation"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Hero } from "../Hero/Hero"
import { Investment } from "../Investment/Investment"
import { Motivation } from "../Motivation/Motivation"
import { News } from "../News/News"
import { Partners } from "../Partners/Partners"
import { Projects } from "../Projects/Projects"
import { Report } from "../Report/Report"
import cl from './Layout.module.scss'

export const Layout = () => {
    return (
        <>
            <Header />
            <main className={cl.main}>
                <Hero />
                <Motivation />
                <Partners />
                <Directions />
                <Banner />
                <Projects />
                <Investment />
                <News />
                <Donation />
                <Aid />
                <Report />
                <Bottom />
                <Footer />
            </main>
            <footer>

            </footer>
        </> 
    )
}