import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { count }  = useCart();
  const { user, logout } = useAuth();
  const navigate   = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>🛒 ShopEasy</Link>

      <div style={styles.right}>
        {user && <span style={styles.greeting}>Hi, {user.name} 👋</span>}

        <Link to="/" style={styles.link}>Products</Link>

        <Link to="/cart" style={styles.cartBtn}>
          Cart {count > 0 && <span style={styles.badge}>{count}</span>}
        </Link>

        {user && (
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav:        { background: "#1a1a1a", padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10 },
  logo:       { fontFamily: "sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", textDecoration: "none" },
  right:      { display: "flex", alignItems: "center", gap: 10 },
  greeting:   { color: "#aaa", fontSize: 13 },
  link:       { color: "#ccc", textDecoration: "none", padding: "8px 14px", borderRadius: 8, fontSize: 14 },
  cartBtn:    { background: "#f5c842", color: "#1a1a1a", textDecoration: "none", padding: "8px 16px", borderRadius: 8, fontWeight: 600, fontSize: 13, display: "flex", alignItems: "center", gap: 6 },
  badge:      { background: "#1a1a1a", color: "#f5c842", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 },
  logoutBtn:  { background: "transparent", color: "#ff6b6b", border: "1px solid #ff6b6b", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600 },
};

export default Navbar;
