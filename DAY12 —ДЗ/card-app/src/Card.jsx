/*************  ✨ Windsurf Command 🌟  *************/
import styles from "./Card.module.css";
function Card({ product }) {
  return (
    // TODO: Add card styles
    <div className={styles.card}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>Цена: {product.price}</p>
      <p>Описание: {product.description}</p>
    </div>
  );
}
export default Card;
