import styles from './Checkout.module.css'
import plane from '/plane.png'
import { useEffect, useRef, useState } from 'react'

export const Checkout = (props) => {
    const {product} = props

    const [quantity,setQuantity] = useState(1) // CANTIDAD QUE UNO DESEA EN EL INPUT DEL DETALLE DEL PRODUCTO
    const [button,setButton] = useState(false) // CAMBIAR EL ESTADO DEL BOTON DE ADD O DELETE

    const units = useRef(1)

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
        let productsOnCart = []
        if(localStorage.getItem('cart')){
            console.log('hay datos')
            productsOnCart = JSON.parse(localStorage.getItem('cart'))
        }else{
            localStorage.setItem('cart',JSON.stringify([]))
        }

        const one = productsOnCart.find( items => items.id === product.id )

        if(one){
            setQuantity(one.units)
            setButton(true)
        }else{
            console.log('entro')
            setQuantity(1)
            setButton(false)
        }
    },[product.id])

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
                                disabled={button}
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
