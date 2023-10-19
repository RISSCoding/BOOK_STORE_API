const express = require('express')

const app = express()
const port = 3333

app.get("/pesanmenu", (req, res) => {
    res.json({
        message: "ini pesan menu",
    });
});

app.put("/pesanmenu", (req, res) => {
    res.json({
        message: "mau pesan makanan atau minuman?",
    });
});

app.post("/pesanmenu", (req, res) => {
    res.json({
        message: "ada banyak makanan",
    });
});
app.delete("/pesanmenu", (req, res) => {
    res.json({
        message: "ada banyak minuman",
    });
});

app.listen(port,() => console.log(`Server running on port ${port}`))
