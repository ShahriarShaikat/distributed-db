import sql from "mssql";

// const sqlConfig = {
//     user: process.env.SQL_USER,
//     password: process.env.SQL_PASSWORD,
//     database: process.env.SQL_DATABASE,
//     server: process.env.SQL_SERVER,
//     pool: {
//       max: 10,
//       min: 0,
//       idleTimeoutMillis: 30000,
//     },
//     options: {
//       encrypt: true,
//       trustServerCertificate: true,
//     },
//   };

  const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT, 10), // Ensure port is a number
    options: {
      encrypt: false, // Set to true if using encryption (depends on your setup)
      trustServerCertificate: true, // Set to false if using a proper certificate
    },
  };
  

export default async function getConnection() {
  try {
    await sql.connect(config);
    return sql;
  } catch (err) {
    console.error('SQL connection error:', err);
    throw err;
  }
}