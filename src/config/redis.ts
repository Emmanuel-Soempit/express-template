import Redis from "ioredis";
import env from "../../env";

const redisClient = new Redis({
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    password: ""
})

export default redisClient