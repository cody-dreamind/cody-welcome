#!/bin/bash
# Move NanoClaw webhook to port 8443, let nginx handle 443

set -e

echo "=== Step 1: Update NanoClaw .env ==="
# Add/update WEBHOOK_PORT and WEBHOOK_URL
ENV_FILE=~/NanoClaw/.env

# Backup
cp "$ENV_FILE" "${ENV_FILE}.bak"

# Remove existing WEBHOOK entries if any
grep -v "^WEBHOOK_PORT=" "$ENV_FILE" | grep -v "^WEBHOOK_URL=" > /tmp/env_new || true

# Add new values
echo "WEBHOOK_PORT=8443" >> /tmp/env_new
echo "WEBHOOK_URL=https://cody.dreamind.cz/webhook/graph" >> /tmp/env_new

# Replace env file
cp /tmp/env_new "$ENV_FILE"

echo "Updated .env:"
grep -E "WEBHOOK" "$ENV_FILE"

echo ""
echo "=== Step 2: Update nginx to handle 443 + proxy webhook ==="
NGINX_CONF="/etc/nginx/sites-available/cody.dreamind.cz"

sudo bash -c 'cat > /tmp/nginx_cody_ssl.conf' << 'NGINXEOF'
# Redirect HTTP to HTTPS
server {
    listen 80;
    server_name cody.dreamind.cz;
    return 301 https://$host$request_uri;
}

# HTTPS server
server {
    listen 443 ssl;
    server_name cody.dreamind.cz;

    ssl_certificate /etc/letsencrypt/live/cody.dreamind.cz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/cody.dreamind.cz/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Proxy Microsoft Graph webhook to NanoClaw
    location /webhook/ {
        proxy_pass https://localhost:8443;
        proxy_http_version 1.1;
        proxy_ssl_verify off;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }

    # Next.js app
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

sudo cp /tmp/nginx_cody_ssl.conf "$NGINX_CONF"

echo ""
echo "=== Step 3: Test nginx config ==="
sudo nginx -t 2>&1

echo ""
echo "=== Step 4: Stop NanoClaw to free port 443 ==="
sudo systemctl stop nanoclaw 2>/dev/null || echo "systemd nanoclaw stop failed"
sleep 2

echo "Port 443 now:"
ss -tlnp | grep ":443 " || echo "Port 443 is free"

echo ""
echo "=== Step 5: Reload nginx (will bind to 443) ==="
sudo systemctl reload nginx 2>/dev/null || sudo nginx -s reload 2>/dev/null
sleep 2

echo "Port 443 now:"
ss -tlnp | grep ":443 "

echo ""
echo "=== Step 6: Restart NanoClaw (will bind to 8443) ==="
sudo systemctl start nanoclaw 2>/dev/null || echo "systemd nanoclaw start failed"
sleep 3

echo "Ports 443 and 8443:"
ss -tlnp | grep -E ":443 |:8443 "

echo ""
echo "=== Step 7: Test ==="
curl -si https://cody.dreamind.cz 2>&1 | head -10 || echo "HTTPS test failed"
curl -si http://localhost:3000 2>&1 | head -5 || echo "local 3000 test failed"
