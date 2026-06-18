const db = require("../config/db");

// Create Project
const createProject = (req, res) => {
  const { title, description, status, user_id } = req.body;

  const sql =
    "INSERT INTO projects (title, description, status, user_id) VALUES (?, ?, ?, ?)";

  db.query(sql, [title, description, status, user_id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Project Created Successfully",
    });
  });
};

// Get All Projects
const getProjects = (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(200).json(result);
  });
};

// Update Project
const updateProject = (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const sql =
    "UPDATE projects SET title=?, description=?, status=? WHERE id=?";

  db.query(sql, [title, description, status, id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Project Updated Successfully",
    });
  });
};

// Delete Project
const deleteProject = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM projects WHERE id=?";

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Project Deleted Successfully",
    });
  });
};

module.exports = {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
};