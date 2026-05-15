import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider }    from "./context/CartContext";
import { AuthProvider }    from "./context/AuthContext";
import ProtectedRoute      from "./components/ProtectedRoute";
import Navbar              from "./components/Navbar";
import LoginPage           from "./pages/LoginPage";
import ProductsPage        from "./pages/ProductsPage";
import CartPage            from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div style={{ background: "#f5f0eb", minHeight: "100vh" }}>
            <Routes>

              {/* Public route — no navbar on login page */}
              <Route path="/login" element={<LoginPage />} />

              {/* Protected routes — must be logged in */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Navbar />
                    <ProductsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Navbar />
                    <CartPage />
                  </ProtectedRoute>
                }
              />

            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
