import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  const { login } = useAuth();
  const navigate  = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate a small delay (like a real API call)
    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        navigate("/");        // go to products page on success
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Logo */}
        <div style={styles.logo}>🛒</div>
        <h1 style={styles.title}>ShopEasy</h1>
        <p style={styles.sub}>Sign in to your account</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Email */}
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="user@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          {/* Password */}
          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          {/* Error message — conditional rendering */}
          {error && <p style={styles.error}>⚠️ {error}</p>}

          <button type="submit" style={styles.btn} disabled={loading}>
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>

        {/* Demo credentials hint */}
        <div style={styles.hint}>
          <p style={{ marginBottom: 4, fontWeight: 600 }}>Demo Credentials:</p>
          <p>📧 user@gmail.com &nbsp;|&nbsp; 🔑 1234</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page:  { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f0eb", padding: 20 },
  card:  { background: "#fff", borderRadius: 20, padding: "40px 36px", width: "100%", maxWidth: 400, border: "1.5px solid #e8e0d5", textAlign: "center" },
  logo:  { fontSize: 48, marginBottom: 8 },
  title: { fontSize: 26, fontWeight: 700, marginBottom: 6 },
  sub:   { color: "#888", fontSize: 14, marginBottom: 28 },
  form:  { textAlign: "left" },
  field: { marginBottom: 16 },
  label: { display: "block", fontSize: 13, fontWeight: 600, marginBottom: 6, color: "#444" },
  input: { width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #ddd", fontSize: 14, outline: "none", background: "#fafafa" },
  error: { color: "#e55", fontSize: 13, marginBottom: 12, background: "#fff0f0", padding: "8px 12px", borderRadius: 8 },
  btn:   { width: "100%", padding: "13px", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer", marginTop: 8 },
  hint:  { marginTop: 24, background: "#f5f0eb", borderRadius: 10, padding: "12px 16px", fontSize: 13, color: "#666", textAlign: "center" },
};

export default LoginPage;
