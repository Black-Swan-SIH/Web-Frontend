const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Example database of users
const users = [
  { id: 1, name: "Achin", age: 25, address: "123 Main St", post: "Designer" },
  { id: 2, name: "John", age: 30, address: "456 Elm St", post: "Developer" },
  { id: 3, name: "Jane", age: 28, address: "789 Oak St", post: "Manager" },
];


app.get("/", (req, res) => {
  res.json(users);
});

// Endpoint to fetch specific user by ID
app.get("/api/user/:id", (req, res) => {
  const userId = parseInt(req.params.id); // Get the ID from the request params
  const user = users.find((u) => u.id === userId); // Find user with matching ID

  if (user) {
    res.json(user); // Send back the user data
  } else {
    res.status(404).json({ message: "User not found" }); // If user not found
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
