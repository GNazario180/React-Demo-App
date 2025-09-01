import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

/*
 * Main page allowing users to see and interact with a list of names
 * users can click on and be redirected to a detail page.
 */
export default function Main() {
  const [items,setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("loggedIn");
    navigate("/");
  }

  // Fetches user list from API and stores in 'items'
  // Only runs once on mount; does not re-run on state changes
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: 24,
        fontFamily: "system-ui, sans-serif",
        maxWidth: 600,
        margin: "0 auto"
      }}
    >
      <button
        onClick={handleLogout}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>

      <h2 style={{marginBottom: 16}}>Main Page</h2>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: 8,
          fontSize: 16,
          border: "1px solid #ccc",
          borderRadius: 4,
          width: "100%",
          marginBottom: 16
        }}
      />

      {loading && <p>Loading...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}

      <ul style={{listStyle: "none", padding: 0}}>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <Link
              to={`/detail/${item.id}`}
              style={{
                padding: 4,
                marginBottom: 16,
                cursor: "pointer",
                transition: "background 0.2s",
                textDecoration: "none",
                color: "#007bff",
                fontWeight: "bold"
              }}

              onMouseEnter={(e) => e.currentTarget.style.background = "#f1f1f1"}
              onMouseLeave={(e) => e.currentTarget.style.background = "none"}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}