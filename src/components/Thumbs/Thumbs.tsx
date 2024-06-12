import styles from './Thumbs.module.css'

export const Thumbs = ({product}) => {
    return (
        <>
            <section className={styles["product-images-block"]}>
                <div className={styles["product-images"]}>
                    {
                        product.images.map((i, k) => (
                            <img
                                key={k}
                                className={styles["mini-img"]}
                                src={i}
                                alt={product.title}
                            />
                        ))
                    }
                </div>
                <img
                    className={styles["big-img"]}
                    id="big-img"
                    src={product.images[0]}
                    alt="MacBook Pro 13'4"
                />
            </section>
        </>
    )
}
