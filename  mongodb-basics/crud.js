
// CREATE
db.users.insertMany([
  { name: "Hamza", age: 28, skills: ["React", "Node"], active: true },
  { name: "Ali", age: 25, skills: ["Angular"], active: false }
]);

// READ
db.users.find();
db.users.find({ active: true });

// UPDATE
db.users.updateOne(
  { name: "Hamza" },
  { $set: { age: 29 } }
);

// DELETE
db.users.deleteOne({ name: "Ali" });
