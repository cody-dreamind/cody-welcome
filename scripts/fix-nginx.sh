#!/bin/bash
# Fix web server proxy for cody.dreamind.cz -> Next.js on port 3000

# Find what port Next.js/node is on
NEXTJS_PORT=$(ss -tlnp 2>/dev/null | grep -E "node|npm" | awk '{print $4}' | grep -v ':443$' | grep -v ':80$' | grep -v ':22$' | grep -oE ':[0-9]+$' | head -1 | tr -d ':')
if [ -z "$NEXTJS_PORT" ]; then
  NEXTJS_PORT="3000"
fi
echo "Next.js port: $NEXTJS_PORT"

echo "=== Checking web servers ==="
which nginx 2>/dev/null && echo "nginx found at: $(which nginx)" || echo "nginx not in PATH"
which caddy 2>/dev/null && echo "caddy found at: $(which caddy)" || echo "caddy not in PATH"
which apache2 2>/dev/null && echo "apache2 found at: $(which apache2)" || echo "apache2 not in PATH"

# Check running web server processes
echo "=== Web server processes ==="
ps aux | grep -E "nginx|caddy|apache|haproxy|traefik" | grep -v grep || echo "No web server processes found via ps"

# Check what's listening on 80 and 443
echo "=== Ports 80 and 443 ==="
ss -tlnp | grep -E ":80 |:443 " || echo "Nothing on 80/443"

# Check common nginx paths
for NGINX_BIN in /usr/sbin/nginx /usr/local/sbin/nginx /usr/bin/nginx /opt/nginx/sbin/nginx; do
  if [ -x "$NGINX_BIN" ]; then
    echo "Found nginx at: $NGINX_BIN"
    NGINX_FOUND="$NGINX_BIN"
    break
  fi
done

# Check common Caddy paths
for CADDY_BIN in /usr/local/bin/caddy /usr/bin/caddy /opt/caddy/caddy; do
  if [ -x "$CADDY_BIN" ]; then
    echo "Found caddy at: $CADDY_BIN"
    CADDY_FOUND="$CADDY_BIN"
    break
  fi
done

# Check config files
echo "=== Config search ==="
find /etc /opt /var /home -name "*.conf" -o -name "Caddyfile" -o -name "caddyfile" 2>/dev/null | xargs grep -l "cody.dreamind.cz" 2>/dev/null | head -5 || echo "No config files found with cody.dreamind.cz"

# If caddy
if [ -n "$CADDY_FOUND" ]; then
  echo "=== Caddy detected ==="
  CADDY_CONF=$(find /etc/caddy /home -name "Caddyfile" 2>/dev/null | head -1)
  echo "Caddyfile: $CADDY_CONF"
  if [ -n "$CADDY_CONF" ]; then
    cat "$CADDY_CONF"
  fi
fi

# If nginx found in non-standard path
if [ -n "$NGINX_FOUND" ]; then
  echo "=== Nginx config search ==="
  "$NGINX_FOUND" -V 2>&1 | grep "conf-path" || true
fi

echo "=== Done with diagnostics ==="
