const { users }= require("../models");
const findAllUser = async(req, res) =>{
    const data = await users.findAll();

    res.json({
        message: "ini dari router",
        data: data,
    });
};

const detailUser = async (req, res) => {
    let id = req.body.id;
    const data = await users.findByPk(id);
    res.json({
        message: "ini dari router",
        data: data,
    });
};

const tambahUser = async (req, res) => {
    try {
        res.send("Tambah data user");
    } catch (error) {
        res.json ({
            message: "error" + error,
        });
    }
};

const hapusUser = async (req, res) => {
    try {
    // ambill data dari request
        const id = req.body.id;
    // hapus data dari database
        const result = await users.destroy({
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

const updateUser = async (req, res) => {
    const id = req.body.id;

    const newdata = req.body;

    const result = await users``.update(newdata,
        {
            where: {
                id: id,
            }
        },
        );
        
};

module.exports = { findAllUser,detailUser,tambahUser,hapusUser,updateUser };