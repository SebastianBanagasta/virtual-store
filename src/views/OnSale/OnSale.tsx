import { Footer } from "../../components/Footer/Footer"
import { Hero } from "../../components/Hero/Hero"
import { NavBar } from "../../components/NavBar/NavBar"
import { OnSaleCard } from "../../components/OnSaleCard/OnSaleCard"

import products from '../../assets/products.js'

export const OnSale = () => {

  // QUEDA PENDIENTE HACER EL SLIDER DE LOS PRODUCTOS EN OFERTA

  return (
    <>
        <NavBar />
        <Hero first={"On"} second={"Sale"} />
        <div className="m-auto w-[1080px]">
            <div className="grid grid-cols-4 gap-7 my-7 ">
              {
                products.map((p,k)=>(
                  p.onsale 
                    ? <OnSaleCard key={k} product={p} />
                    : ""
                ))
              }
            </div>
        </div>
        <Footer />
    </>
  )
}
