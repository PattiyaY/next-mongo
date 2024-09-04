import connect from "@/lib/db";

export async function register() {
  console.log(process.env.MONGODB_URI);

  console.log("Connecting to database...");
  await connect();
}
