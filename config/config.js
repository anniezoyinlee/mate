module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "annie_project",
    host: "localhost",
    dialect: "mysql",
    PORT: 3306
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
