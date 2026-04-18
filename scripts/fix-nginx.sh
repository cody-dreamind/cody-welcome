#!/bin/bash
# Fix nginx config for cody.dreamind.cz -> Next.js

set -e

# Find what port Next.js/node is on (skip system ports)
NEXTJS_PORT=$(ss -tlnp 2>/dev/null | grep -E "node|npm" | awk '{print $4}' | grep -v ':443$' | grep -v ':80$' | grep -v ':22$' | grep -oE ':[0-9]+$' | head -1 | tr -d ':')

if [ -z "$NEXTJS_PORT" ]; then
  NEXTJS_PORT="3000"
fi

echo "Detected Next.js port: $NEXTJS_PORT"

echo "=== /etc/nginx contents ==="
ls /etc/nginx/ 2>/dev/null || echo "no /etc/nginx"
echo "=== sites-enabled ==="
ls /etc/nginx/sites-enabled/ 2>/dev/null || echo "no sites-enabled dir"
echo "=== sites-available ==="
ls /etc/nginx/sites-available/ 2>/dev/null || echo "no sites-available dir"
echo "=== conf.d ==="
ls /etc/nginx/conf.d/ 2>/dev/null || echo "no conf.d dir"

NGINX_CONF=$(grep -rl "cody.dreamind.cz" /etc/nginx/ 2>/dev/null | head -1)

if [ -n "$NGINX_CONF" ]; then
  echo "Found config: $NGINX_CONF"
  cat "$NGINX_CONF"
  CURRENT_PORT=$(grep -oP 'proxy_pass http://localhost:\K[0-9]+' "$NGINX_CONF" | head -1)
  echo "Current proxy port: $CURRENT_PORT"
  if [ -n "$CURRENT_PORT" ] && [ "$CURRENT_PORT" != "$NEXTJS_PORT" ]; then
    echo "Updating port: $CURRENT_PORT -> $NEXTJS_PORT"
    sudo sed -i "s|proxy_pass http://localhost:${CURRENT_PORT};|proxy_pass http://localhost:${NEXTJS_PORT};|g" "$NGINX_CONF"
  else
    echo "Port OK or not found, no change needed"
  fi
else
  echo "No config found, creating one"
  sudo mkdir -p /etc/nginx/sites-available /etc/nginx/sites-enabled
  CONF_FILE="/etc/nginx/sites-available/cody.dreamind.cz"
  printf 'server {\n    listen 80;\n    server_name cody.dreamind.cz;\n    location / {\n        proxy_pass http://localhost:%s;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection upgrade;\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}\n' "$NEXTJS_PORT" | sudo tee "$CONF_FILE"
  sudo ln -sf "$CONF_FILE" /etc/nginx/sites-enabled/cody.dreamind.cz
fi

sudo nginx -t
sudo systemctl reload nginx
echo "Nginx reloaded OK"

sleep 2
echo "=== Local test on port $NEXTJS_PORT ==="
curl -si "http://localhost:${NEXTJS_PORT}" 2>&1 | head -10 || echo "local test failed"
