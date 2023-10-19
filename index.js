const express = require('express')

const app = express()
const port = 3333

app.get('/pesanmenu',(req,res) =>{
    res.send("pesan apa?")
})

app.put('/pesanmenu',(req,res) =>{
    res.send("teh manis ada")
})

app.post('/pesanmenu',(req,res) =>{
    res.send("nasgr ada")
})
app.delete('/pesanmenu',(req,res) =>{
    res.send("mie ada")
})

app.listen(port,() => console.log(`Server running on port ${port}`))
