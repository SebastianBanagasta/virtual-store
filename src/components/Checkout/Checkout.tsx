import styles from './Checkout.module.css'
import plane from '/plane.png'
import { useEffect, useRef, useState } from 'react'

export const Checkout = (props) => {
    const {product} = props

    const [quantity,setQuantity] = useState(1)
    const [button,setButton] = useState(false)

    const units = useRef(1)

    //console.log(!localStorage.getItem('cart'))

    let productInStorage = []
    !localStorage.getItem('cart') 
        ? localStorage.setItem('cart',JSON.stringify([]))
        : (productInStorage = JSON.parse(localStorage.getItem('cart') || "[]" ))

    const manageCart = () => {
        const one = productInStorage.find(e => {
            e.id === product.id
        })
        
        if(!one){
            product.units = quantity
            productInStorage.push(product)
            setButton(true)
        }else{
            productInStorage = productInStorage.filter(e => e.id !== product.id)
            setButton(false)
        }
        localStorage.setItem('cart',JSON.stringify(productInStorage))
    }

    useEffect(()=>{
        // GESTION DE ESTADOS - menejar referencias y efectos - Actividad: Manejar el re-renderizado automático de Checkout
    },[])

    return (
        <>
            <div className={styles["product-checkout-block"]}>
                <div className={styles["checkout-container"]}>
                    <span className={styles["checkout-total-label"]}>Total:</span>
                    <h2 id="price" className={styles["checkout-total-price"]}>${(product.price * quantity).toLocaleString()}</h2>
                    <p className={styles["checkout-description"]}>
                        Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                        50711 haciendo la solicitud en AFIP.
                    </p>
                    <ul className={styles["checkout-policy-list"]}>
                        <li>
                            <span className={styles["policy-icon"]}>
                                <img
                                    src={plane}
                                    alt="Truck"
                                />
                            </span>
                            <span className={styles["policy-desc"]}>Agrega el producto al carrito para conocer los costos de envío</span>
                        </li>
                        <li>
                            <span className={styles["policy-icon"]}>
                                <img
                                    src={plane}
                                    alt="Plane"
                                />
                            </span>
                            <span className={styles["policy-desc"]}>Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
                        </li>
                    </ul>
                    <div className={styles["checkout-process"]}>
                        <div className={styles["top"]}>
                            <input 
                                type="number" 
                                min="1" 
                                value={quantity}
                                ref={units}
                                onChange={()=>setQuantity(Number(units.current.value))} 
                            />
                            <button 
                                type="button" 
                                className={button ? styles["remove-btn"] : styles["cart-btn"]}
                                onClick={manageCart}
                            >
                                {button ? "Remove from cart" : "Add to cart"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
