import getConnection from "@/DB/dbConfig";

export async function GET() {
  try {
    // Get the SQL connection
    const sql = await getConnection();

    // Create a SQL request
    const request = new sql.Request();

    // Execute a SQL query to get data
    const result = await request.query("SELECT * FROM [dbo].[user]");

    // Send the result as a JSON response
    return Response.json(result.recordset);
  } catch (err) {
    console.error("API error:", err);
    return Response.json({ error: "Internal Server Error" });
  }
}

// import { PrismaClient } from '@prisma/client';

// export async function GET(){

//         // Get the SQL connection
//         const prisma = new PrismaClient();
//         try {
//           const users = await prisma.user.findMany();

//           return Response.json(users);
//         } catch (error) {

//         console.error('API error:', error);
//         return Response.json({ error: 'Internal Server Error' });
//         }

// }
