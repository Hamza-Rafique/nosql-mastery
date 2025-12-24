import Redis from "ioredis";

const redis = new Redis();

async function rateLimiter(ip) {
  const requests = await redis.incr(ip);

  if (requests === 1) {
    await redis.expire(ip, 60);
  }

  if (requests > 5) {
    console.log("❌ Too many requests");
    return;
  }

  console.log("✅ Request allowed");
}

// Test
rateLimiter("192.168.1.1");
