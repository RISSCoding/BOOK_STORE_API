const express = require('express')
const { Client } = require("pg");

const app = express()
const port = 3333

const client = new Client ({
    user: "postgres",
    host: "localhost",
    database: "book_store_api",
    password: "root",
    port: 5432,
})

client
.connect()
.then(() => {
    console.log("Terhubung ke database postgreSQL");
})
.catch((error) => {
    console.error("Gagal terhubung ke database postgreSQL");
});

app.get('/users',(req, res) => {
    // akses database
    client
    .connect()
    .then(() => {
        console.log("Terhubung ke database postgreSQL");
    })
    .catch((error) => {
        console.error("Gagal terhubung ke database postgreSQL");
    });
    // ambil data
    let data;
    client.query('SELECT id, nama, "Alamat" FROM public.users;',(req,result) => {
        res.json(result.rows);
    });
});

app.get ('/users/:id', async (req, res) => {
  
 });

 app.post ('/users', async (req, res) => {
  let data = req.body;

  const query = "INSERT INTO public.users(user_id, nama, alamat)VALUES ($1, $2, $3";

  client.query(query,[data.user_id,data.nama,data.alamat])
 });
app.listen(port,() => console.log(`Server running on port ${port}`))

// representasi data dari database
// const data_users = [
//     { id: 1, name: "Ilham Anugrah", alamat: "Sukabumi" },
//     { id: 2, name: "Ghina Khairunnisa", alamat: "Bandung" },
//     { id: 3, name: "Hana Syifa", alamat: "Jakarta" },
//     { id: 4, name: "Daehan Ibrahim", alamat: "Bandung" },
// ];

// app.get("/users/:id", (req, res) => {
//     // get data dari parameter
//     let id = parseInt(req.params.id);

//     // get data dari database
//     let result;
//     const user = data_users.find((user) => user.id === id);
//     if (user) {
//         result = {
//         status: 200,
//         data: user,
//         };
//     } else {
//         res.status(404).json({ error: "User not found" });
//     }
//     res.json(result);
// });
