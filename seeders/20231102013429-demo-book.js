'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
      judul: 'Jamet Circle Vol. 1',
      penerbit: 'Akad',
      deskripsi: 'Pada awalnya, Jamet Cirole yang terdiri dari tiga orang cowok bernama Eja, Jeje, dan Ale itu berjalan balk-balk saja. Semua guyonan Internal tongkrongan itu sendiri berhasil mengelola dan mengeratkan hubungan antar ketiganya. Sampai suatu candaan bahkan ketika, percintaan hadir di tengah hubungan persahabatan yang membuat perpecahan terjadi. Eje yang saat itu putus cinta melontarkan kalimat yang menjadi bumerang untuk hubungannya dengan Ale dan Jeje.',
      gambar: '8ycdsyndmrnv5nkvtxf3yx.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      judul: 'Catatan Anak Sekolah ',
      penerbit: 'Akad',
      deskripsi: '"Masa SMA adalah masa yang paling mengesankan. Soalnya, Jamet Circle pun setuju dengan pernyataan tersebut.Dihukum di lapangan karena masalah anak kelas, senioritas antar kakak kelas dan adik kelas, terkena razia karena merasa paling oke, dan menangis karena mendapatkan nilai buruk. Jewer kuping Eja kalau kalian nggak pernah merasakan hal itu.',
      gambar: 'jbu45gckrrcbxkxrw9cwnu.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
