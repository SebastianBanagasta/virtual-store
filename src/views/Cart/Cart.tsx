import { CartCard } from '../../components/CartCard/CartCard'
import { CartResume } from '../../components/CartResume/CartResume'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { NavBar } from '../../components/NavBar/NavBar'

export const Cart = () => {
    return (
        <>
            <NavBar />
            <Hero first={"Carrito"} second={"de compras"} />
            <main className=' w-full flex justify-center gap-5 items-center p-5 '>
                <CartCard title="iPad Pro 13" color="Silver" />
                <CartResume />
            </main>
            <Footer />
        </>
    )
}