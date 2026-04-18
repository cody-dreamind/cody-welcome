#!/bin/bash
# Check nginx sites config and NanoClaw routing

echo "=== Nginx sites-enabled/cody.dreamind.cz ==="
sudo cat /etc/nginx/sites-enabled/cody.dreamind.cz 2>/dev/null || sudo cat /etc/nginx/sites-available/cody.dreamind.cz 2>/dev/null || echo "Cannot read config"

echo ""
echo "=== nginx.conf includes ==="
sudo grep -n "include" /etc/nginx/nginx.conf 2>/dev/null

echo ""
echo "=== conf.d contents ==="
sudo ls /etc/nginx/conf.d/ 2>/dev/null

echo ""
echo "=== NanoClaw config (proxy/site config) ==="
ls ~/NanoClaw/ 2>/dev/null | head -20
ls ~/NanoClaw/config/ 2>/dev/null | head -20 || echo "no config dir"
cat ~/NanoClaw/config/sites.json 2>/dev/null || echo "no sites.json"
cat ~/NanoClaw/config/proxy.json 2>/dev/null || echo "no proxy.json"
find ~/NanoClaw -name "*.json" -not -path "*/node_modules/*" 2>/dev/null | xargs grep -l "cody" 2>/dev/null | head -5

echo ""
echo "=== Check what NanoClaw routes 443 to ==="
# NanoClaw might have a config for domain routing
find ~/NanoClaw -name "*.json" -not -path "*/node_modules/*" 2>/dev/null | head -20

echo ""
echo "=== Nginx access log - last requests to cody.dreamind.cz ==="
sudo tail -20 /var/log/nginx/access.log 2>/dev/null || echo "Cannot read access log"
sudo tail -5 /var/log/nginx/error.log 2>/dev/null || echo "Cannot read error log"

echo ""
echo "=== Test local port 80 directly ==="
curl -si -H "Host: cody.dreamind.cz" http://localhost:80/ 2>&1 | head -15 || echo "port 80 test failed"

echo ""
echo "=== Test local port 3000 directly ==="
curl -si http://localhost:3000/ 2>&1 | head -15 || echo "port 3000 test failed"
