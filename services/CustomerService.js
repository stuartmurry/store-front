require("dotenv").config();
var keys = require("../keys.js");
const Sequelize = require("sequelize");

module.exports = {
  sequelize: null,
  User: null,

  IsConnected: false,
  Connect: Connect,
  Disconnect: Disconnect,

  // // User
  CreateProduct: CreateProduct,
  ListProducts: ListProducts,
  DeleteProduct: DeleteProduct
};

var Product;

function Connect() {
  // runs before all tests in this block
  console.log("Creating connection...");
  console.log(keys.mysql.CLEARDB_DATABASE_URL);
  this.sequelize = new Sequelize(keys.mysql.CLEARDB_DATABASE_URL);

  this.Product = this.sequelize.define("products", {
    item_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },

    product_name: {
      type: Sequelize.STRING
    },

    department_name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DECIMAL(10,2)
    },
    stock_quantity: {
      type: Sequelize.INTEGER
    }
  });

  this.IsConnected = true;
}

function Disconnect() {
  console.log("Closing connection...");
  this.sequelize.close();
  this.IsConnected = false;
  // process.exit();
}

function ListProducts() {
  return this.sequelize.sync().then(() => this.Product.findAll());
}

function CreateProduct(product) {
  const isDropRecreate = keys.environment.NODE_ENV == 'test'
  return this.sequelize.sync({ force: isDropRecreate }).then(() => {
    return this.Product.create(product);
  });
}

function DeleteProduct(product) {
  return this.sequelize.sync().then(() => this.Product.destroy({ where : product }));
}



