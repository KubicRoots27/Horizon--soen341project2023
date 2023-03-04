import connectDB from "database/conn";
import Jobs from "model/job";


export default async function handler(req, res) {
    connectDB("Jobs").catch((error) => res.json({ error: error.message }));
    
    if (req.method === "GET") {
        

        Jobs.find({}, function (err, data) {
            if (err) {
            return res.status(400).json({ error: err.message });
            }
            return res.status(200).json({ status: true, jobs: data });
        });        
    }
}
