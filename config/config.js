module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "mate",
    host: "localhost",
    dialect: "mysql",
    PORT: 8889
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
