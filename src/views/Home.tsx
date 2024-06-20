
import axios from 'axios'

import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { NavBar } from '../components/NavBar/NavBar'
import { ProductCard } from '../components/ProductCard/ProductCard'
//import styles from './Home.module.css'

//import products from '../assets/products.js'
import Product from '../interfaces/Product.js'
import { useEffect, useState } from 'react'

export const Home = () => {

    const [products,setProducts] = useState<Product[]>([])
    
    useEffect(()=>{
        axios.get("/products.json")
            .then((res)=>setProducts(res.data))
            .catch((err)=>console.log(err))
    },[])

    return (
        <>
            <NavBar />
            <Hero first={"tecnología"} second={"renovada"} />
            <main className='w-full flex justify-center items-center p-[20px]'>
                <div className="w-[1080px] flex flex-wrap justify-between" id="products">
                    {
                        products.map((p:Product,k:number)=>(
                            <ProductCard 
                                key={k}
                                id={p.id}
                                title={p.title}
                                price={p.price}
                                colors={p.colors}
                                images={p.images} />
                        ))
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}
