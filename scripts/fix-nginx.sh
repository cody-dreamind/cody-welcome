#!/bin/bash
# Check NanoClaw env config and proxy routing

echo "=== NanoClaw data/env ==="
ls ~/NanoClaw/data/env/ 2>/dev/null || echo "no data/env dir"
cat ~/NanoClaw/data/env/*.json 2>/dev/null || echo "no env json files"

echo ""
echo "=== NanoClaw dist/index.js - check proxy/https handling ==="
head -200 ~/NanoClaw/dist/index.js 2>/dev/null | grep -i "proxy\|https\|443\|site\|domain" | head -30

echo ""
echo "=== NanoClaw logs - check for proxy errors ==="
tail -50 ~/NanoClaw/logs/nanoclaw.error.log 2>/dev/null | grep -i "cody\|proxy\|404\|error" | tail -20
tail -20 ~/NanoClaw/logs/nanoclaw.log 2>/dev/null | grep -i "cody\|proxy\|404\|443" | tail -10

echo ""
echo "=== Check ~/.config/nanoclaw/ ==="
ls ~/.config/nanoclaw/ 2>/dev/null || echo "no ~/.config/nanoclaw"
cat ~/.config/nanoclaw/*.json 2>/dev/null || echo "no json files in ~/.config/nanoclaw"

echo ""
echo "=== Check if NanoClaw has a proxy config file ==="
find ~/NanoClaw -name "proxy*" -o -name "*proxy*" 2>/dev/null | grep -v node_modules | grep -v ".git"

echo ""
echo "=== Current NanoClaw .env or environment ==="
cat ~/NanoClaw/.env 2>/dev/null || echo "no .env"
cat ~/NanoClaw/data/env/default.json 2>/dev/null || echo "no env/default.json"
