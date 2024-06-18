import { useEffect, useState } from 'react'
import { CartCard } from '../../components/CartCard/CartCard'
import { CartResume } from '../../components/CartResume/CartResume'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { NavBar } from '../../components/NavBar/NavBar'
import Product from '../../interfaces/Product'

export const Cart = () => {

    const [productOnCart,setProductOnCart] = useState([])

    const localStorageCart:string|null = localStorage.getItem('cart')
    useEffect(()=>{
        if(localStorageCart){
            const products = JSON.parse(localStorageCart)
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
                        productOnCart.map((e:Product)=>(
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
                <CartResume total={9000} />
            </main>
            <Footer />
        </>
    )
}