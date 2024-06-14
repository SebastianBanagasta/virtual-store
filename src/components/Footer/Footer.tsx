//import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <>
            <footer className='min-h-64 bg-[#7525a7] flex flex-col items-center '>
                <div id="footer" className="w-[1080px] flex justify-between p-3 ">
                    <ul className="w-44 list-none p-3">
                        <li className="font-bold pb-5">
                            <a className="text-white no-underline" href="./index.html">Ofertas</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Laptops</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Audio</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Auriculares</a>
                        </li>
                    </ul>
                    <ul className="w-[170px] list-none p-3">
                        <li className="font-bold pb-5">
                            <a className="text-white no-underline" href="./index.html">Cómo comprar</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Formas de pago</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Envios</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Devoluciones</a>
                        </li>
                    </ul>
                    <ul className="w-[170px] list-none p-3">
                        <li className="font-bold pb-5">
                            <a className="text-white no-underline" href="./index.html">Costos y tarifas</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Impuestos</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Facturación</a>
                        </li>
                    </ul>
                    <ul className="w-[170px] list-none p-3">
                        <li className="font-bold pb-5">
                            <a className="text-white no-underline" href="./index.html">Mis pedidos</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Pedir nuevamente</a>
                        </li>
                        <li className="py-2 px-0">
                            <a className="text-white no-underline" href="./index.html">Lista de deseos</a>
                        </li>
                    </ul>
                    <ul className="w-[170px] list-none p-3">
                        <li className="font-bold pb-5">
                            <a className="text-white no-underline" href="./index.html">Garantía</a>
                        </li>
                    </ul>
                </div>
                <div className="w-[1080px] text-center text-white font-bold py-6 px-0 border-t border-solid border-[#ba53fb]">Curso de HTML + CSS 2023</div>
            </footer>
        </>
    )
}
