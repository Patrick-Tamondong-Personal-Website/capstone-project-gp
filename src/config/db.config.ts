export const config = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "P19680113t!@#$pg",
    DB: "testdb",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  export const dialect = "postgres";
  