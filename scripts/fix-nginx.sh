#!/bin/bash
# Check NanoClaw proxy configuration for site routing

echo "=== NanoClaw config files ==="
find ~/NanoClaw -name "*.json" -not -path "*/node_modules/*" -not -path "*/.pm2/*" 2>/dev/null | sort

echo ""
echo "=== NanoClaw main config ==="
cat ~/NanoClaw/config.json 2>/dev/null || echo "no config.json"
cat ~/NanoClaw/nanoclaw.json 2>/dev/null || echo "no nanoclaw.json"

echo ""
echo "=== NanoClaw dist/index.js - proxy config grep ==="
grep -n "proxy\|site\|domain\|443\|cody\|listen" ~/NanoClaw/dist/index.js 2>/dev/null | head -30 || echo "cannot read dist/index.js"

echo ""
echo "=== How is NanoClaw started? ==="
cat ~/NanoClaw/package.json 2>/dev/null | grep -A5 '"scripts"'

echo ""
echo "=== Check if there is a sites/proxy config in NanoClaw ==="
ls ~/NanoClaw/data/ 2>/dev/null
cat ~/NanoClaw/data/sites.json 2>/dev/null || echo "no data/sites.json"
cat ~/NanoClaw/data/proxy-config.json 2>/dev/null || echo "no data/proxy-config.json"

echo ""
echo "=== Check NanoClaw for proxy/reverse proxy config ==="
find ~/NanoClaw -maxdepth 3 -name "*.json" -not -path "*/node_modules/*" 2>/dev/null | xargs grep -l "proxy\|reverse\|upstream" 2>/dev/null | head -10

echo ""
echo "=== NanoClaw systemd or startup config ==="
cat /etc/systemd/system/nanoclaw.service 2>/dev/null || sudo cat /etc/systemd/system/nanoclaw.service 2>/dev/null || echo "no nanoclaw.service"
pm2 describe NanoClaw 2>/dev/null || pm2 describe nanoclaw 2>/dev/null || echo "nanoclaw not in pm2"
