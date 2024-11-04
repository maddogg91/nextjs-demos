import { connectDB } from "@/app/lib/mongodb";
import User from "@/models/User";

await connectDB();
const user = await User.findOne();


export default function Page() {
    return <p>Dashboard Page {user.email}</p>;
}