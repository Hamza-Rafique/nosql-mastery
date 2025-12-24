import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const dbName = "nosql_mastery";

const client = new MongoClient(url);

async function run() {
  await client.connect();
  const db = client.db(dbName);

  await db.collection("users").insertOne({
    name: "Hamza",
    age: 28
  });

  console.log("User inserted");
  await client.close();
}

run();
