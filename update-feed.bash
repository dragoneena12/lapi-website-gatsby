#!/usr/bin/env bash

feed=$(curl -s https://zenn.dev/lapi/feed)

cat << EOF > ./data/feed.ts
const data = \`
$feed
\`
export default data
EOF
