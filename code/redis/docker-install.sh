docker run -p 6379:6379 \
-d \
--name redis \
--appendonly yes \
-v /usr/local/docker/redis/redis.conf:/etc/redis/redis.conf \
-v /usr/local/docker/redis/data:/data  \
redis:alpine redis-server /etc/redis/redis.conf
