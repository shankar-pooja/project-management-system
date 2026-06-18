const db = require("../config/db");

// Create Task
const createTask = (req, res) => {
  const { title, description, status, project_id } = req.body;

  const sql =
    "INSERT INTO tasks (title, description, status, project_id) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [title, description, status, project_id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.status(201).json({
        message: "Task Created Successfully",
      });
    }
  );
};

// Get All Tasks
const getTasks = (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(200).json(result);
  });
};

module.exports = {
  createTask,
  getTasks,
};