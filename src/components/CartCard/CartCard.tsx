import { useRef } from "react"

export const CartCard = ({ idProducts, title, color, description, photo, price, quantity }) => {

  const units = useRef()

  const manageUnits = () => {
    let productsOnCart = JSON.parse(localStorage.getItem("cart"));
    const one = productsOnCart.find((e) => e.id === idProducts);
    one.units = Number(units.current.value);
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  }

  return (
    <>
      <article className="bg-[#f2f2f2] rounded-lg flex justify-between items-center h-[220px] px-8 ">
        <img className=" w-[100px] h-[100px] rounded-lg mr-5" src={photo} alt="ipad" />
        <div className="w-[340px] h-full flex flex-col justify-center gap-2">
          <strong className="">{title} </strong>
          <span className="product-description">- {color}</span>
          <p className="whitespace-nowrap overflow-hidden text-ellipsis">{description}</p>
          <input className=" w-14 px-3 py-1 rounded-lg " type="number" name="quantity" defaultValue={quantity} ref={units} onChange={manageUnits} min="1" id={idProducts} />
        </div>
        <strong className="">AR$ ${price}</strong>
      </article>
    </>
  )
}