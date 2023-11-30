// const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
import { MongoClient } from "mongodb";
const uri =
    "mongodb+srv://gunjee163:Baloo123@cluster0.yekjzpu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
    try {
        const database = client.db("tomo");
        const trips = database.collection("trips");
        // { $set: { "price": { $arrayElemAt: ["$price", 0] } } },
        // Query for a movie that has the title 'Back to the Future'
        const result = await trips.updateMany({}, [
            {
                $set: {
                    slug: {
                        $replaceAll: {
                            input: "$slug",
                            find: "/",
                            replacement: "",
                        },
                    },
                },
            },
        ]);
        console.log(result);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
