'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl-users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: true
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true
      },
      role: {
        type: Sequelize.STRING,
        value: ["admin", "student"],
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    /**
     * validasi jika email duplikat
     * Primary Key Constraint: Memastikan bahwa nilai di kolom tertentu dalam sebuah tabel unik dan tidak boleh NULL.
     * Biasanya digunakan untuk mengidentifikasi secara unik setiap baris data dalam tabel.
     */
    await queryInterface.addConstraint("tbl-users", {
      type: "unique",
      fields: ["email"],
      name: "UNIQUE_USERS_EMAIL"
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl-users');
  }
};