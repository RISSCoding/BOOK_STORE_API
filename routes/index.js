const router = require("express").Router();
const { 
    findAllBooks,
    detailBooks,
    tambahBuku, 
    hapusbuku, 
    updateBuku, } = require("../controllers/BookController.js");

const { 
findAllUser, detailUser, tambahUser, hapusUser, updateUser} = require("../controllers/UserController.js");

// endpoint book
router.get("/books", findAllBooks);
router.get("/findbook", detailBooks);
router.post("/book", tambahBuku);
router.delete('/book', hapusbuku);
router.put("/book", updateBuku);

// endpoint user
router.get("/user", findAllUser);
router.get("/user/:id", detailUser);
router.post("/user", tambahUser);
router.delete('/user', hapusUser);
router.put("/user", updateUser);

module.exports = router;