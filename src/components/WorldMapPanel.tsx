import WorldMap from "./WorldMap";
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {

  const [location, setLocation] = useState([51.505, -0.09]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      // TODO: Make sure to decode api call properly (for lat and long)
      setLocation(data.constantValue);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data immediately on component mount
    fetchData();

    // Set up the interval to fetch data every 5 seconds
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-5 d-flex justify-content-center">
      <WorldMap latitude={location[0]} longitude={location[1]} />
    </div>
  );
};

export default App;
