import { useState } from "react";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, updateQty, total } = useCart();
  const [ordered, setOrdered] = useState(false);

  // Conditional Rendering: Order success screen
  if (ordered) {
    return (
      <div style={styles.center}>
        <div style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>
        <h2 style={styles.heading}>Order Placed!</h2>
        <p style={{ color: "#666" }}>Thank you for your purchase.</p>
      </div>
    );
  }

  // Conditional Rendering: Empty cart screen
  if (cart.length === 0) {
    return (
      <div style={styles.center}>
        <div style={{ fontSize: 64, marginBottom: 12 }}>🛒</div>
        <h2 style={styles.heading}>Your cart is empty</h2>
        <p style={{ color: "#888" }}>Go add some products!</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Your Cart</h1>
      <p style={styles.sub}>{cart.length} item{cart.length > 1 ? "s" : ""} in cart</p>

      {/* Cart Items List */}
      {cart.map((item) => (
        <div key={item.id} style={styles.item}>
          <span style={{ fontSize: 32 }}>{item.emoji}</span>
          <div>
            <p style={styles.itemName}>{item.name}</p>
            <p style={styles.itemPrice}>₹{item.price} each</p>
          </div>
          <div style={styles.qtyRow}>
            <button style={styles.qtyBtn} onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
            <span style={{ fontWeight: 600, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
            <button style={styles.qtyBtn} onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
            <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)}>🗑</button>
          </div>
        </div>
      ))}

      {/* Order Summary */}
      <div style={styles.summary}>
        <div style={styles.row}><span style={{ color: "#aaa" }}>Subtotal</span><span>₹{total}</span></div>
        <div style={styles.row}><span style={{ color: "#aaa" }}>Shipping</span><span style={{ color: "#22c55e" }}>Free</span></div>
        <div style={{ ...styles.row, borderTop: "1px solid #333", paddingTop: 12, fontSize: 20, fontWeight: 700 }}>
          <span>Total</span>
          <span style={{ color: "#f5c842" }}>₹{total}</span>
        </div>
        <button style={styles.checkoutBtn} onClick={() => setOrdered(true)}>
          Place Order →
        </button>
      </div>
    </div>
  );
}

const styles = {
  page:        { maxWidth: 960, margin: "0 auto", padding: "32px 20px" },
  center:      { textAlign: "center", padding: "80px 20px" },
  heading:     { fontSize: 28, fontWeight: 700, marginBottom: 8 },
  sub:         { color: "#666", marginBottom: 24, fontSize: 14 },
  item:        { background: "#fff", borderRadius: 12, padding: 16, display: "flex", alignItems: "center", gap: 14, marginBottom: 12, border: "1.5px solid #e8e0d5" },
  itemName:    { fontWeight: 600, fontSize: 15 },
  itemPrice:   { color: "#888", fontSize: 13 },
  qtyRow:      { display: "flex", alignItems: "center", gap: 10, marginLeft: "auto" },
  qtyBtn:      { width: 28, height: 28, borderRadius: 8, border: "1.5px solid #ddd", background: "#f9f9f9", cursor: "pointer", fontWeight: 700, fontSize: 15 },
  removeBtn:   { background: "none", border: "none", color: "#e55", cursor: "pointer", fontSize: 18, marginLeft: 8 },
  summary:     { background: "#1a1a1a", color: "#fff", borderRadius: 14, padding: 24, marginTop: 24 },
  row:         { display: "flex", justifyContent: "space-between", marginBottom: 10 },
  checkoutBtn: { background: "#f5c842", color: "#1a1a1a", border: "none", borderRadius: 10, padding: 14, fontWeight: 700, fontSize: 15, cursor: "pointer", width: "100%", marginTop: 16 },
};

export default CartPage;
