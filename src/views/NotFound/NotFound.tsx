import styles from './NotFound.module.css'

import { Footer } from "../../components/Footer/Footer"
import { Hero } from "../../components/Hero/Hero"
import { NavBar } from "../../components/NavBar/NavBar"

export const NotFound = () => {
  return (
    <>
        <NavBar />
        <Hero first={"Aqui"} second={"no es 😢"} />
        <main>
            <h1 className={styles["not-found"]}>Pagina no encontrada 😢</h1>
        </main>
        <Footer />
    </>
  )
}
