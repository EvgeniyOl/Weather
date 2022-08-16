import { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState("");

  const timer = () => {
    setTime(new Date().toLocaleString());
  };

  useEffect(() => {
    const refreshTimer = setInterval(timer, 1000);
    return () => clearInterval(refreshTimer);
  }, []);
  return <>{time}</>;
};

export default Clock;
