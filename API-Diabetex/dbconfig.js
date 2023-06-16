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


export default config;