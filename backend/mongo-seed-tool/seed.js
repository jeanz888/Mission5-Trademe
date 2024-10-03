const { MongoClient } = require('mongodb');
require('dotenv').config();

const data = [
  {
    id: 1,
    title: "Mountain Bike",
    description: "A great mountain bike for all terrains.",
    price: "$500",
    image: "img/Mountain Bike.jpg"
  },
  {
    id: 3,
    title: "Vintage Watch",
    description: "A classic vintage watch.",
    price: "$300",
    image: "img/Vintage Watch.jpg"
  },
  {
    id: 4,
    title: "Smartphone",
    description: "Latest model smartphone with great features.",
    price: "$800",
    image: "img/Smartphone.jpg"
  },
  {
    id: 5,
    title: "Coffee Maker",
    description: "Brew the perfect cup of coffee.",
    price: "$150",
    image: "img/Coffee Maker.jpg"
  },
  {
    id: 6,
    title: "Electric Guitar",
    description: "A beautiful electric guitar for music lovers.",
    price: "$600",
    image: "img/Electric Guitar.jpg"
  },
  {
    id: 2,
    title: "Gaming Laptop",
    description: "High-performance laptop for gaming.",
    price: "$1200",
    image: "img/gaming laptops.jpg"
  }
];

async function seedDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db();
    const collection = database.collection('other listing');

    // Delete existing documents (optional)
    await collection.deleteMany({});
    console.log('Cleared existing data');

    // Insert new documents
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} documents inserted`);

    // Create index for unique id
    await collection.createIndex({ id: 1 }, { unique: true });
    console.log('Created unique index on id field');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

seedDatabase().catch(console.error);
