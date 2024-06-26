import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import styles from './Details.module.css'


import { NavBar } from '../../components/NavBar/NavBar'
import { Footer } from '../../components/Footer/Footer'

//import products from '../../assets/products.js'
import { Thumbs } from '../../components/Thumbs/Thumbs.js'
import { Description } from '../../components/Description/Description.js'
import { Checkout } from '../../components/Checkout/Checkout.js'
import Product from '../../interfaces/Product.js'
import { useEffect, useState } from 'react'


export const Details = () => {
    const { id } = useParams()
    /*
    const product: Product = products.find((e) => e.id === id)
    const productsOferta: Product[] = products.filter((e) => e.onsale)
    */

    const [product,setProduct] = useState<Product[]>({
        id: '',
        title:'',
        price: 0,
        images: [],
        colors: []
    })
    const [onsale, setOnSale] = useState<Product[]>([]);
    useEffect(()=>{
        axios.get('/products.json')
            .then((res)=>{
                //VISTA DEL PRODUCTO EN GRANDE
                const products: Array<Product> = res.data
                const detailProduct: Product | undefined = products.find((e) => e.id === id)
                detailProduct && setProduct(detailProduct)

                //VISTA DE LOS PRODUCTOS DE OFERTA
                const filterProducts: Array<Product> = products.filter((e) => e.onsale)
                filterProducts.length > 0 && setOnSale(filterProducts)
            })
            .catch((err)=>console.log(err))
    },[id])

    if (product) {
        return (
            <>
                <NavBar />
                <main>
                    <div className={styles["details-container"]}>
                        <div id="details" className={styles["columns-container"]}>
                            <Thumbs product={product} />
                            <Description product={product} />
                            <Checkout product={product} />
                        </div>
                        <div className={styles["sales-block"]}>
                            <h2 className={styles["sales-title"]}>Ofertas de la semana</h2>
                            <div id="product-container" className={styles["product-container"]}>
                                {
                                    onsale.map((po: Product, k) => (
                                        <Link key={k} className={styles["product-cart"]} to={`/details/` + po.id}>
                                            <img
                                                className={styles["product-img"]}
                                                src={po.images[0]}
                                                alt={po.title}
                                            />
                                            <div className={styles["product-info"]}>
                                                <span className={styles["product-title"]}>{po.title}</span>
                                                <span className={styles["product-description"]}>
                                                    {po.colors.map((c) => (` ${c}`))}
                                                </span>
                                                <div className={styles["product-price-block"]}>
                                                    <span className={styles["product-price"]}>{po.price}</span>
                                                    <span className={styles["product-discount"]}>50% Off</span>
                                                </div>
                                                <div className={styles["product-tax-policy"]}>
                                                    Incluye impuesto País y percepción AFIP
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
    return (
        <>
            <h1>No ha seleccionado un producto correcto</h1>
        </>
    )
}
