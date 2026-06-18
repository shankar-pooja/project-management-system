import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Total Projects: {stats.totalProjects}</h3>
      <h3>Total Tasks: {stats.totalTasks}</h3>
      <h3>Completed Projects: {stats.completedProjects}</h3>
      <h3>Completed Tasks: {stats.completedTasks}</h3>
    </div>
  );
}

export default Dashboard;