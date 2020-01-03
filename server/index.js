const http = require('http');
const redis = require('redis')
const redisAdapter = require('socket.io-redis')

const app = require('./app')
const config = require('./config')

const host = config.REDIS_HOST
const port = config.REDIS_PORT
const pass = config.REDIS_PASS

// Server
const server = http.createServer(app);

// Atach server to the socket
app.io.attach(server)

// Origin socket configuration
app.io.origins([config.ORIGINS])

// Using the adapter to pass event between nodes
/* app.io.adapter(redis({ 
    host: config.REDIS_HOST, 
    port: config.REDIS_PORT
}));*/

const pub = redis.createClient({
    host: config.REDIS_HOST,
    password: config.REDIS_PASS,
    port: config.REDIS_PORT
});
const sub = redis.createClient({
    host: config.REDIS_HOST,
    password: config.REDIS_PASS,
    port: config.REDIS_PORT
});
app.io.adapter(redisAdapter({ pubClient: pub, subClient: sub }));

server.listen(config.PORT, () => {
    console.log(`Server Listening on port ${config.PORT}`)
});
