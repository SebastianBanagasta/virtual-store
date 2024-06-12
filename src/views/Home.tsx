
import { Footer } from '../components/Footer/Footer'
import { Hero } from '../components/Hero/Hero'
import { NavBar } from '../components/NavBar/NavBar'
import { ProductCard } from '../components/ProductCard/ProductCard'
import styles from './Home.module.css'

import products from '../assets/products.js'

export const Home = () => {

    console.log()
    
    return (
        <>
            <NavBar />
            <Hero first={"tecnología"} second={"renovada"} />
            <main>
                <div className={styles["product-container"]} id="products">
                    {
                        products.map((p,k)=>(
                            <ProductCard 
                                key={k}
                                id={p.id}
                                title={p.title}
                                price={p.price}
                                color={p.colors[0]}
                                image={p.images[0]} />
                        ))
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}
