//import styles from './Hero.module.css'

export const Hero = ({first, second}) => {
    return (
        <>

            <section className="bg-[url('/hero_bg.png')] h-[200px] flex justify-center bg-cover bg-top">
                <article className="w-[1080px] flex flex-col items-start justify-center pl-5 ">
                    <span className="font-bold text-4xl text-white ">{first}</span>
                    <span className="font-bold text-7xl text-white ">{second}</span>
                </article>
            </section>
        </>
    )
}
