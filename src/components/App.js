import React, { useState, useEffect } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
   const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data once when component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setData(result); // Update state asynchronously
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency → runs once

  return (
    <div id="main">
        {/* Do not remove the main div */}
     <h1>Data Fetcher</h1>

      {/* Show loading until data arrives */}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default App
