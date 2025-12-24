## Redis Basic Commands

### Strings
SET name "Hamza"
GET name

### Expiry
SET session "abc123" EX 60
TTL session

### Lists
LPUSH skills "React"
LPUSH skills "Node"
LRANGE skills 0 -1

### Sets
SADD roles "admin"
SADD roles "user"
SMEMBERS roles
