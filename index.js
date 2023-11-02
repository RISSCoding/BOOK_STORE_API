const express = require("express");

const app = express();
app.use(express.json());

const port = 3333;

const router = require("./routes/index");
app.use(router);

app.listen(port, () => console.log(`Server runing on ${port}`));