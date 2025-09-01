import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validatePhone } from '../utils/validation';

/*
 * Login page for users to log-in using a phone number starting with +254
 * On success, login state is saved to localStorage and user is redirected to the main page.
 */
export default function Login() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const msg = validatePhone(phone.trim());
    if (msg) {
      setError(msg);
      return;
    }

    setError("");

    // Save login state so the user stays logged in across page refreshes
    localStorage.setItem("loggedIn", "true");

    navigate("/main");
  }

  return (
    <div
      style={{
        padding: 24,
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f8f9fa"
      }}
    >
      <h2 style={{marginBottom: 16, color: "black"}}>Login</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          flexDirection: "column",
          gap: 12,
          maxWidth: 420,
          marginTop: 16
        }}
      >
        <label htmlFor="phone" style={{fontWeight: "bold", color: "black"}}>Phone number</label>

        <input
          id="phone"
          type="tel"
          placeholder="+254712345678"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            padding: 8,
            fontSize: 16,
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />

        {error && (
          <div
            role="alert" // Error message for invalid phone number - using role="alert" for accessibility
            style={{
              color: "white",
              background: "crimson",
              padding: 8,
              borderRadius: 6,
              fontWeight: "bold"
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          style={{
            padding: "10px 16px",
            fontSize: 16,
            borderRadius: 6,
            background: "grey",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: 8
          }}

          onMouseEnter={(e) => e.currentTarget.style.background = "blue"}
          onMouseLeave={(e) => e.currentTarget.style.background = "grey"}
        >
          Log in
        </button>
      </form>
    </div>
  );
}