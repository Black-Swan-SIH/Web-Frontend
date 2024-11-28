const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Example database of users
const users = [
  {
    id: 1,
    name: "Achin",
    age: 25,
    address: "123 Main St",
    post: "Designer",
    skills: [
      "Graphic Design",
      "UI/UX Design",
      "Illustration",
      "Typography",
      "Branding",
      "Photo Editing",
      "Animation",
      "Prototyping",
      "Video Editing",
      "3D Modeling",
      "Web Design",
      "Logo Design",
      "Wireframing",
      "Storyboarding",
      "Creative Thinking",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Canva",
      "Color Theory",
    ],
  },
  {
    id: 2,
    name: "John",
    age: 30,
    address: "456 Elm St",
    post: "Developer",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "HTML",
      "CSS",
      "TypeScript",
      "Express",
      "MongoDB",
      "SQL",
      "REST APIs",
      "GraphQL",
      "Redux",
      "Unit Testing",
      "Docker",
      "Kubernetes",
      "Git",
      "CI/CD",
      "AWS",
      "Web Performance",
    ],
  },
  {
    id: 3,
    name: "Jane",
    age: 28,
    address: "789 Oak St",
    post: "Manager",
    skills: [
      "Leadership",
      "Project Management",
      "Communication",
      "Problem-Solving",
      "Time Management",
      "Team Building",
      "Conflict Resolution",
      "Strategic Planning",
      "Agile Methodologies",
      "Risk Management",
      "Budgeting",
      "Decision Making",
      "Resource Allocation",
      "Negotiation",
      "Presentation Skills",
      "Networking",
      "Critical Thinking",
      "Performance Evaluation",
      "Process Improvement",
      "MS Office Suite",
    ],
  },
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
