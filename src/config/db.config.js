module.exports = {
    HOST: "aien12four.cxr0m1n24wv8.us-east-1.rds.amazonaws.com",
    USER: "aien12four",
    PASSWORD: "uniqlo12aien",
    DB: "images",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };