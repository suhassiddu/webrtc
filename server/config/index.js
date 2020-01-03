
const CONFIG = {
    PORT: process.env.PORT || 3000,
    CHAT_NAMESPACE: '/video-chat',
    // REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    // REDIS_PORT: process.env.REDIS_PORT || 6379,
    REDIS_HOST: 'redis-13782.c100.us-east-1-4.ec2.cloud.redislabs.com',
    REDIS_PORT: '13782',
    REDIS_PASS: 'signzy@123',
    ORIGINS: process.env.ORIGINS || '*:*',
    KEY: 'unique'
}

module.exports = CONFIG

// redis-13782.c100.us-east-1-4.ec2.cloud.redislabs.com:13782