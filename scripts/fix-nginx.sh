#!/bin/bash
# Check webhook.js in NanoClaw and attempt the real fix

echo "=== NanoClaw webhook.js ==="
cat ~/NanoClaw/dist/webhook.js 2>/dev/null | head -60 || echo "no webhook.js"

echo ""
echo "=== Check what WEBHOOK_PORT NanoClaw uses ==="
cat ~/NanoClaw/.env | grep -i "webhook\|port\|443"

echo ""
echo "=== SS full port listing ==="
ss -tlnp 2>/dev/null

echo ""
echo "=== Attempt nginx SSL config for cody.dreamind.cz ==="
# Add SSL to nginx config
NGINX_CONF="/etc/nginx/sites-available/cody.dreamind.cz"
sudo bash -c "cat > $NGINX_CONF" << 'NGINXEOF'
server {
    listen 80;
    server_name cody.dreamind.cz;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name cody.dreamind.cz;

    ssl_certificate /etc/letsencrypt/live/cody.dreamind.cz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/cody.dreamind.cz/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }
}
NGINXEOF

echo "=== Nginx config written ==="
sudo cat /etc/nginx/sites-available/cody.dreamind.cz

echo ""
echo "=== Test nginx config ==="
sudo nginx -t 2>&1

echo ""
echo "=== Check if port 443 is available for nginx ==="
# Check if NanoClaw is bound to 443 (would conflict)
ss -tlnp | grep ":443 " && echo "PORT 443 IS IN USE" || echo "PORT 443 IS FREE"
