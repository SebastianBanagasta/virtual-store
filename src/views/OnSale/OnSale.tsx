import { Footer } from "../../components/Footer/Footer"
import { Hero } from "../../components/Hero/Hero"
import { NavBar } from "../../components/NavBar/NavBar"
import { OnSaleCard } from "../../components/OnSaleCard/OnSaleCard"

import products from '../../assets/products.js'
import { useState } from "react"

export const OnSale = () => {

  // QUEDA PENDIENTE HACER EL SLIDER DE LOS PRODUCTOS EN OFERTA
  const [from,setFrom] = useState(0)
  const [to,setTo] = useState(4)

  const sliderOnSale = (booleano) => {
    if (booleano && from > 0) {
      setFrom(from-4)
      setTo(to-4)
    }else if(!booleano && to <= products.length ){
      setFrom(from+4)
      setTo(to+4)
    }
  }

  return (
    <>
        <NavBar />
        <Hero first={"On"} second={"Sale"} />
        <div className="m-auto w-[1080px]">
            <div className="relative grid grid-cols-4 gap-7 my-7 ">
              {
                products.map((p,k)=>(<OnSaleCard key={k} product={p} />)).slice(from,to)
              }
              <button onClick={()=>sliderOnSale(true)} className="absolute left-[-50px] top-[50%] translate-y-[50%] bg-slate-300 text-black py-1 px-3 rounded-lg">&lt;</button>
              <button onClick={()=>sliderOnSale(false)} className="absolute right-[-50px] top-[50%] translate-y-[50%] bg-slate-300 text-black py-1 px-3 rounded-lg">&gt;</button>
            </div>
        </div>
        <Footer />
    </>
  )
}
