import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

// Get unique categories from products list
const categories = ["All", ...new Set(products.map((p) => p.category))];

function ProductsPage() {
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("All");

  // Filter by category AND search
  const filtered = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchSearch   = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Our Products</h1>
      <p style={styles.sub}>50 products across 5 categories 🛍️</p>

      {/* Search + Filter Row */}
      <div style={styles.filterRow}>
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />
        <div style={styles.catRow}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={category === cat ? styles.catActive : styles.catBtn}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p style={styles.count}>{filtered.length} products found</p>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <p style={styles.empty}>No products found. Try a different search.</p>
      ) : (
        <div style={styles.grid}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  page:      { maxWidth: 1100, margin: "0 auto", padding: "32px 20px" },
  heading:   { fontSize: 28, fontWeight: 700, marginBottom: 6 },
  sub:       { color: "#666", marginBottom: 20, fontSize: 14 },
  filterRow: { marginBottom: 12 },
  search:    { padding: "10px 16px", borderRadius: 10, border: "1.5px solid #ddd", width: "100%", maxWidth: 340, fontSize: 14, outline: "none", marginBottom: 14 },
  catRow:    { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 },
  catBtn:    { padding: "7px 16px", borderRadius: 20, border: "1.5px solid #ddd", background: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 500 },
  catActive: { padding: "7px 16px", borderRadius: 20, border: "1.5px solid #1a1a1a", background: "#1a1a1a", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 600 },
  count:     { color: "#888", fontSize: 13, marginBottom: 16 },
  grid:      { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 16 },
  empty:     { color: "#888", marginTop: 20 },
};

export default ProductsPage;
