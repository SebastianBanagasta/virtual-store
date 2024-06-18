import { useEffect, useState } from 'react'
import { CartCard } from '../../components/CartCard/CartCard'
import { CartResume } from '../../components/CartResume/CartResume'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { NavBar } from '../../components/NavBar/NavBar'

export const Cart = () => {

    const [productOnCart,setProductOnCart] = useState([])

    useEffect(()=>{
        if(localStorage.getItem('cart')){
            const products = JSON.parse(localStorage.getItem('cart'))
            setProductOnCart(products)
        }
    },[])

    return (
        <>
            <NavBar />
            <Hero first={"Carrito"} second={"de compras"} />
            <main className=' w-full flex justify-center items-start gap-5 p-5 '>
                <div className='flex flex-col gap-5'>
                    {
                        productOnCart.map((e)=>(
                            <CartCard
                                key={e.id}
                                idProducts={e.id}
                                title={e.title}
                                color={e.colors[0]}
                                description={e.description}
                                photo={e.images[0]}
                                price={e.price}
                                quantity={e.units}
                            />
                        ))
                    }
                </div>
                <CartResume total="900" />
            </main>
            <Footer />
        </>
    )
}