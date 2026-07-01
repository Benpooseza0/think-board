import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config();

// สร้าง Ratelimit ที่อนุญาตให้มีการร้องขอได้สูงสุด 100 ครั้งต่อ 60 วินาที
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: (Ratelimit.slidingWindow(100, "60 s")),
})

export default ratelimit;