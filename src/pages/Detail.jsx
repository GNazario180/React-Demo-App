import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

/*
 * Shows details of every name (email, phone, website) and
 * provides a back button to allow user to return to Main page.
 */
export default function Detail() {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Fetch details for a single user based on the route "id" param
  // Runs again if "id" changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch item");
        setLoading(false);
      });
  }, [id]);

  return (
    <div
      style={{
        padding: 24,
        fontFamily: "system-ui, sans-serif",
        maxWidth: 500,
        margin: "0 auto"
      }}
    >
      {loading && <p>Loading...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
      {item && (
        <div
          style={{
            padding: 20,
            border: "1px solid #ccc",
            borderRadius: 8,
            background: "#fff"
          }}
        >
          <span style={{color: "black"}}>
            <h3 style={{marginBottom: 12}}>{item.name}</h3>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <p>Website: {item?.website}</p>
          </span>
        </div>
      )}

      <button
        onClick={() => navigate("/main")}
        style={{
          padding: "8px 16px",
          fontSize: 16,
          borderRadius: 6,
          border: "none",
          backgroundColor: "#007bff",
          marginTop: 12,
          color: "white",
          cursor: "pointer"
        }}

        onMouseEnter={(e) => e.currentTarget.style.background = "blue"}
        onMouseLeave={(e) => e.currentTarget.style.background = "#007bff"}
      >
        Back
      </button>
    </div>
  );
}