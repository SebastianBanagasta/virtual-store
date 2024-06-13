
export const OnSaleCard = (props) => {

    const {product} = props

    return (
        <div className="bg-white border border-slate-200 w-[250px] box-border">
            <img 
                src={product.images[0]} 
                alt={product.title}
                className="w-full h-[250px] object-cover object-center"
            />
            <hr />
            <div className="w-[250px] p-5">
                <h1 className="text-md">{product.title}</h1>
                <p className="text-sm text-neutral-600 opacity-45 font-bold ">Desde <span className="line-through">AR$ {product.price}</span></p>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-2xl font-semibold">AR$ {(product.price - (product.price * 0.35))}</p>
                    <span className=" text-emerald-600 font-semibold ">35% OFF</span>
                </div>
                <p className="text-emerald-600 mt-4">¡Comprá y pagá en pesos!</p>
            </div>
        </div>
    )
}
