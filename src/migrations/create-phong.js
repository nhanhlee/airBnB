'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Phong', {
            // phongId: DataTypes.INTEGER,
            // tenPhong: DataTypes.STRING,
            // khach: DataTypes.INTEGER,
            // phongNgu: DataTypes.INTEGER,
            // giuong: DataTypes.INTEGER,
            // phongTam: DataTypes.INTEGER,
            // moTa: DataTypes.STRING,
            // giaTien: DataTypes.INTEGER,
            // mayGiat: DataTypes.BOOLEAN,
            // banLa: DataTypes.BOOLEAN,
            // tivi: DataTypes.BOOLEAN,
            // dieuHoa: DataTypes.BOOLEAN,
            // wifi: DataTypes.BOOLEAN,
            // bep: DataTypes.BOOLEAN,
            // doXe: DataTypes.BOOLEAN,
            // hoBoi: DataTypes.BOOLEAN,
            // hinhAnh: DataTypes.STRING
            phongId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tenPhong: {
                type: Sequelize.STRING
            },
            khach: {
                type: Sequelize.INTEGER
            },
            phongNgu: {
                type: Sequelize.INTEGER
            },
            giuong: {
                type: Sequelize.INTEGER
            },
            phongTam: {
                type: Sequelize.INTEGER
            },
            moTa: {
                type: Sequelize.STRING
            },
            giaTien: {
                type: Sequelize.INTEGER
            },
            mayGiat: {
                type: Sequelize.BOOLEAN
            },
            banLa: {
                type: Sequelize.BOOLEAN
            },
            tivi: {
                type: Sequelize.BOOLEAN
            },
            dieuHoa: {
                type: Sequelize.BOOLEAN
            },
            wifi: {
                type: Sequelize.BOOLEAN
            },
            bep: {
                type: Sequelize.BOOLEAN
            },
            doXe: {
                type: Sequelize.BOOLEAN
            },
            hoBoi: {
                type: Sequelize.BOOLEAN
            },
            hinhAnh: {
                type: Sequelize.STRING
            },
            viTriId: {
                type: Sequelize.INTEGER
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
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Phong');
    }
};