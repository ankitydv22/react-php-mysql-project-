import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://eb16b3c927de-10-244-6-102-3000.papa.r.killercoda.com/api.php")
      .then(r => r.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setMsg(data.message);
      })
      .catch(err => setError(err.message));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "40px", textAlign: "center" }}>
      <h1>React + PHP + MySQL</h1>
      {error
        ? <p style={{ color: "red" }}>Error: {error}</p>
        : <p style={{ color: "green", fontSize: "1.2rem" }}>{msg}</p>
      }
    </div>
  );
}

export default App;
