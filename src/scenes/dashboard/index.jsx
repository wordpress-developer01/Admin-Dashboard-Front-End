import React, { useEffect, useState } from 'react'
import api from 'services/api'

const Dashboard = () => {

  const [summary, setSummary] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSummary = async () => {
       try {
         const response = await api.get("/general/summary");
         setSummary(response.data);
       } catch (err) {
         if (err.response?.status) {
            setError(`Error ${err.response.status}: Failed to load summary`);
      }  else {
            setError("Failed to load summary");
            }

  console.error(err);
       }
    }

    fetchSummary();
  }, []);

   if (summary === null && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


 return (
    <div>
      <p>Total Users: {summary.totalUsers}</p>
      <p>Total Sales: {summary.totalSales}</p>
      <p>Today Revenue: {summary.todayRevenue}</p>
    </div>
  );
};

export default Dashboard;