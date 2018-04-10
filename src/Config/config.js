'use strict'

module.exports = {
    PORT: process.env.PORT || 3001,
    DB: process.env.MONGODB || 'mongodb://GaidenMXTest:GaidenMX1985@cluster0-shard-00-00-aymeg.mongodb.net:27017,cluster0-shard-00-01-aymeg.mongodb.net:27017,cluster0-shard-00-02-aymeg.mongodb.net:27017/Cursos?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
    TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto"
}