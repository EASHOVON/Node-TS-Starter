import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const mongoDB = mongoose.createConnection(process.env.MongoDB_URI);
export default mongoDB;
//# sourceMappingURL=DB.js.map