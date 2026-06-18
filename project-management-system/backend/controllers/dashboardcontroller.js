const db = require("../config/db");

const getDashboard = (req, res) => {
  const query = `
    SELECT
      (SELECT COUNT(*) FROM projects) AS totalProjects,
      (SELECT COUNT(*) FROM tasks) AS totalTasks,
      (SELECT COUNT(*) FROM projects WHERE status='Completed') AS completedProjects,
      (SELECT COUNT(*) FROM tasks WHERE status='Completed') AS completedTasks
  `;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result[0]);
  });
};

module.exports = { getDashboard };