import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    };
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
