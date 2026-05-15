import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart, cart } = useCart();

  // Check if product is already in cart
  const inCart = cart.some((item) => item.id === product.id);

  return (
    <div style={styles.card}>
      <div style={styles.emoji}>{product.emoji}</div>
      <p style={styles.name}>{product.name}</p>
      <span style={styles.tag}>{product.tag}</span>
      <p style={styles.price}>₹{product.price}</p>
      <button
        style={inCart ? styles.addedBtn : styles.addBtn}
        onClick={() => addToCart(product)}
      >
        {inCart ? "✓ Added" : "Add to Cart"}
      </button>
    </div>
  );
}

const styles = {
  card:     { background: "#fff", borderRadius: 16, padding: "24px 16px", textAlign: "center", border: "1.5px solid #e8e0d5" },
  emoji:    { fontSize: 48, marginBottom: 12 },
  name:     { fontWeight: 600, fontSize: 15, marginBottom: 4 },
  tag:      { background: "#f5f0eb", borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#888", marginBottom: 12, display: "inline-block" },
  price:    { fontSize: 20, fontWeight: 700, marginBottom: 14 },
  addBtn:   { background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", cursor: "pointer", fontWeight: 600, fontSize: 13, width: "100%" },
  addedBtn: { background: "#22c55e", color: "#fff", border: "none", borderRadius: 8, padding: "9px 20px", cursor: "pointer", fontWeight: 600, fontSize: 13, width: "100%" },
};

export default ProductCard;
