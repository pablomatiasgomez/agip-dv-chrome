#!/bin/bash
set -e

echo "Starting packaging.."

if ! which uglifyjs &> /dev/null ; then
  echo '[ERROR] uglifyjs not found. Install it with "npm install uglify-js -g"'
  exit 1
fi
if ! which embrace-web-cli &> /dev/null ; then
  echo '[ERROR] embrace-web-cli not found. Install it with "npm install @embrace-io/web-cli -g"'
  exit 1
fi

uglifyJsFile () {
  echo "Uglifying $1"
  mv "$1" "$1.bk.js"
  uglifyjs "$1.bk.js" --compress --mangle --output "$1" --source-map includeSources
}
restoreJsFile () {
  echo "Restoring $1"
  rm "$1"
  mv "$1.bk.js" "$1"
}

rm package.zip || true

uglifyJsFile "js/agipdv.min.js"
uglifyJsFile "js/background.js"

echo "Uploading Embrace symbol files..."
embrace-web-cli upload -a "v9bby" -t "$(cat embrace-token)" -p "js/"

echo "Creating package.zip ..."
zip -vr package.zip \
css/ \
images/ \
js/agipdv.min.js \
js/background.js \
manifest.json
echo "Created package.zip ..."

restoreJsFile "js/agipdv.min.js"
restoreJsFile "js/background.js"
