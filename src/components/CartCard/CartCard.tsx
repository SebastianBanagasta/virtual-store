
export const CartCard = ({ title,color }) => {
  return (
    <>
        <article className="bg-[#f2f2f2] rounded-lg flex justify-between items-center h-[220px] px-8 ">
            <img className=" w-[100px] h-[100px] rounded-lg mr-5" src="https://i.postimg.cc/kX8PKZpq/ipad.jpg" alt="ipad" />
            <div className="w-[340px] h-full flex flex-col justify-center gap-2">
                <strong className="">{title} </strong>
                <span className="product-description">- {color}</span>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis">The iPad Pro 13 is a stunning piece of technology, boasting a large 12.9-inch Retina display with ProMotion technology. With 256GB of storage, this iPad provides ample space for all your files, apps, and multimedia content. The sleek and slim design, combined with the silver color, gives it a sophisticated look. Enjoy seamless connectivity with the WiFi feature. Capture your memorable moments with the high-quality camera and relive them on the impressive screen. Whether you're a professional artist, student, or just someone who appreciates cutting-edge technology, the iPad Pro 12.9 is a versatile device that meets all your needs.</p>
                <input className=" w-14 px-3 py-1 rounded-lg " type="number" name="quantity" defaultValue="1" min="1" id="P7Q8R90" />
            </div>
            <strong className="">AR$ $800000</strong>
        </article>
    </>
  )
}
