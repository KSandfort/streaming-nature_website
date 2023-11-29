import React from "react";

const TestButton: React.FC = () => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/v1/streams?score_number=0"
      );
      const data = await response.json();
      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};
export default TestButton;
