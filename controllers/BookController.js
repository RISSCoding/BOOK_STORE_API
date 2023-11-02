const { Book }= require("../models");
const findAllBooks = async(req, res) =>{
    const data = await Book.findAll();

    res.json({
        message: "ini dari router",
        data: data,
    });
};

const detailBooks = async (req, res) => {
    let id = req.body.id;
    const data = await Book.findByPk(id);
    res.json({
        message: "ini dari router",
        data: data,
    });
};

const tambahBuku = async (req, res) => {
    try {
        res.send("Tambah data buku");
    } catch (error) {
        res.json ({
            message: "error" + error,
        });
    }
};

const hapusbuku = async (req, res) => {
    try {
    // ambill data dari request
        const id = req.body.id;
    // hapus data dari database
        const result = await Book.destroy({
            where: {
                id: id,
            },
        });
        res.json ({
            message: "berhasil menghapus data",
        });
    } catch (error) {
        res.json ({
            message: "gagal menghapus data" + error,
        });
    }

};

const updateBuku = async (req, res) => {
    const id = req.body.id;

    const newdata = req.body;

    const result = await Book.update(newdata,
        {
            where: {
                id: id,
            }
        },
        );
        
};

module.exports = { findAllBooks,detailBooks,tambahBuku,hapusbuku,updateBuku };