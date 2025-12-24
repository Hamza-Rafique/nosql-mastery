## MongoDB Query Practice

### Find users older than 26
db.users.find({ age: { $gt: 26 } })

### Projection
db.users.find({}, { name: 1, _id: 0 })

### Sorting
db.users.find().sort({ age: -1 })

### AND condition
db.users.find({ active: true, age: { $gte: 28 } })

### OR condition
db.users.find({
  $or: [{ name: "Hamza" }, { age: 25 }]
})

### Array contains
db.users.find({ skills: "React" })

### Count documents
db.users.countDocuments()

### Limit results
db.users.find().limit(1)
