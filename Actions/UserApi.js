'use server';



import getConnection from "@/DB/dbConfig";
import { revalidatePath } from "next/cache";

export const getUser = async ()=>{

    const res = {
        success : false,
        payload : [],
           message : 'Couldn\'t get users',

    }

    try {
        // Get the SQL connection
        const sql = await getConnection();
    
        // Create a SQL request
        const request = new sql.Request();
    
        // Execute a SQL query to get data
           const result = await request.query('SELECT * FROM [dbo].[user]'); 
    
        // Send the result as a JSON response
        res.payload = result.recordset;
        res.message =  'Success';
        res.success = true;
        return res;
      } catch (err) {
        console.error('API error:', err);
        return res;
      }
      
}

export const createUser = async (formData)=>{
        const res = {
        success : false,
        payload : [],
        message : 'Couldn\'t create user',

    }

    const name = formData.get('name');

    try{
        const sql = await getConnection();
        const request = new sql.Request();
        request.input('name',sql.VarChar(50),name);
        const q = "insert into [dbo].[user](name) values(@name)";
        const result = await request.query(q);
        if(result.rowsAffected[0] ===1){
            revalidatePath('/user');
        }
    }catch(err){
        console.error('API error:', err);
        return res;
    }



    // try {
    //     // Get the SQL connection
    //     const sql = await getConnection();
    
    //     // Create a SQL request
    //     const request = new sql.Request();
    
    //     // Execute a SQL query to get data
    //     const result = await request.query('SELECT * FROM [dbo].[user]'); 
    
    //     // Send the result as a JSON response
    //     res.payload = result.recordset;
    //     res.message =  'Success';
    //     res.success = true;
    //     return res;
    //   } catch (err) {
    //     console.error('API error:', err);
    //     return res;
    //   }
      
}