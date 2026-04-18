#!/bin/bash
# Deep diagnostics for cody.dreamind.cz 443 setup

echo "=== Process on port 443 ==="
ss -tlnp | grep ":443 "
echo ""

echo "=== All node/pm2 processes ==="
ps aux | grep -E "node|npm|pm2" | grep -v grep

echo "=== PM2 list ==="
pm2 list 2>/dev/null || echo "pm2 not available"

echo "=== Process 81946 details ==="
ls -la /proc/81946/exe 2>/dev/null || echo "PID 81946 not found (may have changed)"

echo "=== All node processes cmdline ==="
for pid in $(pgrep node 2>/dev/null); do
  echo "PID $pid: $(cat /proc/$pid/cmdline 2>/dev/null | tr '\0' ' ')"
done

echo "=== Nginx config path ==="
/usr/sbin/nginx -t 2>&1 || echo "nginx -t failed (no sudo)"

echo "=== Check /etc/nginx with sudo ==="
sudo ls /etc/nginx/ 2>/dev/null || echo "Cannot sudo ls /etc/nginx"
sudo ls /etc/nginx/sites-enabled/ 2>/dev/null || echo "Cannot sudo ls sites-enabled"

echo "=== Check sudoers ==="
sudo -l 2>/dev/null | head -20 || echo "Cannot check sudoers"

echo "=== Letsencrypt config ==="
cat /etc/letsencrypt/renewal/cody.dreamind.cz.conf 2>/dev/null || echo "Cannot read letsencrypt config"
