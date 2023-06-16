import 'dotenv/config'

const config= {
    user    : "Diabetex"    , //process.env.DB_USER,
    password: "Diabetex"    , //process.env.DB_PASSWORD,
    server  : "localhost"   , //process.env.DB_SERVER,
    database: "Diabetex"    , //process.env.DB_DATABASE,
    options: {
        trustServerCertificate: true,
        trustedConnection : true
    }
}
console.log("config")
console.log(config);

export default config;