import styles from './Description.module.css'

export const Description = ({product}) => {
    return (
        <>
            <div className={styles["product-description-block"]}>
                <h1 className={styles["product-title"]}>{product.title}</h1>
                <form className={styles["product-selector"]}>
                    <fieldset className={styles["product-fieldset"]}>
                        <label className={styles["product-label"]} htmlFor="color">Color</label>
                        <select
                            className={styles["product-select"]}
                            id="color"
                        >
                            {product.colors.map((c, k) => (
                                <option key={k} defaultValue={c}>{c}</option>
                            ))}
                        </select>
                    </fieldset>
                </form>
                <div className={styles["product-description"]}>
                    <span className={styles["product-label"]}>Descripción</span>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}
