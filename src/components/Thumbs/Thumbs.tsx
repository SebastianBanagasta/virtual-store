import { useEffect, useState } from 'react'
import styles from './Thumbs.module.css'
import ProductProp from '../../interfaces/ProductProp'

export const Thumbs = (props:ProductProp) => {
    const { product } = props
    //console.log(product)
    const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg")

    useEffect(()=>{
        setThumb(product.images[0])
    },[product.id])

    return (
        <>
            <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                    {
                        product.images.map((i, k) => (
                            <img
                                key={k}
                                className={styles["mini-img"]}
                                src={i}
                                alt={product.title}
                                onClick={()=>setThumb(i)}
                            />
                        ))
                    }
                </div>
                <img
                    className={styles["big-img"]}
                    id="big-img"
                    src={thumb}
                    alt="MacBook Pro 13'4"
                />
            </section>
        </>
    )
}
