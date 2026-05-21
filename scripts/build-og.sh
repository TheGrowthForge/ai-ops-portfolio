#!/usr/bin/env bash
# Regenerates public/og-image.png from og-template.html (headless Chrome).
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -x "$CHROME" ]; then
  echo "Google Chrome not found at: $CHROME" >&2
  exit 1
fi

"$CHROME" --headless --disable-gpu --hide-scrollbars --force-color-profile=srgb \
  --screenshot="public/og-image.png" --window-size=1200,630 \
  --virtual-time-budget=4000 "file://$(pwd)/og-template.html" >/dev/null 2>&1

echo "Wrote public/og-image.png"
