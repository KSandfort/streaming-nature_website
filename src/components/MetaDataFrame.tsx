import "../../scss/custom.scss";
import { useEffect, useState } from "react";

function MetaDataFrame() {
  const [data, setData] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("PLACE API URL HERE");
        if (!response.ok) {
          throw new Error(
            "HTTP error -> Weather and Location API request not successful"
          );
        }
        const result = await response.text();
        setData(result);
      } catch (error) {
        console.error("Error!", error);
      }
    };

    fetchData();
    const intervalID = setInterval(fetchData, 5000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <p>Location Info</p>
      </div>
      <div className="row">
        <p>Weather Info</p>
      </div>
    </div>
  );
}

export default MetaDataFrame;
