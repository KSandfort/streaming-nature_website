import { useState, useEffect } from "react";

function SourceTimer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>The current time is: {time.toLocaleTimeString()}</p>;
}

export default SourceTimer;
