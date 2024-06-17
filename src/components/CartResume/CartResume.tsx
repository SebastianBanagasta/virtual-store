
export const CartResume = () => {
  return (
    <>
        <div className="bg-[#f2f2f2] w-[340px] h-[220px] rounded-lg flex flex-col p-6 ">
            <div className="flex flex-col items-center justify-between h-full w-full">
                <h2 className=" flex justify-center gap-3 font-bold text-xl"><span>Resumen</span><span>del</span><span>pedido</span></h2>
                <div className="w-full flex justify-between">
                    <h3>Total</h3>
                    <strong className="">$800000</strong>
                </div>
                <small className="w-full text-left mb-4 ">Incluye impuesto PAIS y percepción AFIP.</small>
            </div>
            <button className="py-2 bg-[#ff3b3c] text-white font-bold rounded-lg hover:bg-[#ff3b3be4] hover:scale-[1.01] duration-200 active:scale-[0.99] active:bg-[#ff3b3c] " id="buy" type="button">COMPRAR</button>
        </div>
    </>
  )
}
