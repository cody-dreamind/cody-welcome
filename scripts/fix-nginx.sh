#!/bin/bash
# Check NanoClaw source for proxy/vhost functionality and check what cert it uses

echo "=== NanoClaw package.json (version and deps) ==="
cat ~/NanoClaw/package.json | grep -E '"name"|"version"|"dependencies"' -A 20 | head -30

echo ""
echo "=== NanoClaw dist/index.js - first 100 lines ==="
head -100 ~/NanoClaw/dist/index.js 2>/dev/null

echo ""
echo "=== What cert does NanoClaw use for 443? ==="
cat ~/NanoClaw/.env | grep -i "cert\|ssl\|tls\|key\|https" 2>/dev/null || echo "no cert in .env"
ls ~/NanoClaw/certs/ 2>/dev/null || echo "no certs dir"
find ~/NanoClaw -name "*.pem" -o -name "*.crt" -o -name "*.key" 2>/dev/null | grep -v node_modules | head -10

echo ""
echo "=== Check OneCLI on port 10254 ==="
ss -tlnp | grep "10254\|10255"
curl -s http://localhost:10254/ 2>&1 | head -5 || echo "port 10254 not responding"

echo ""
echo "=== Check if there is Cloudflare or a gateway involved ==="
# Check if the incoming requests hit nginx (which would mean something routes from 443 -> 80)
echo "Nginx error log tail:"
sudo tail -20 /var/log/nginx/error.log 2>/dev/null | tail -5
echo ""
echo "Nginx access log - requests with HTTPS-originating headers:"
sudo grep "X-Forwarded-Proto" /var/log/nginx/access.log 2>/dev/null | tail -5 || echo "no X-Forwarded-Proto in access log"
