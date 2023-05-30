#!/bin/bash
set -e

echo "Starting packaging.."

if ! which minify &> /dev/null ; then
  echo '[ERROR] minify not found. Install it with "npm i minify -g"'
  exit 1
fi

minifyJs () {
  echo "Minifying $1"
  mv "$1" "$1.bk.js"
  minify "$1.bk.js" > "$1"
}
restoreJs () {
  echo "Restoring $1"
  rm "$1"
  mv "$1.bk.js" "$1"
}

rm package.zip || true

minifyJs "js/agipdv.min.js"
minifyJs "js/background.js"

echo "Creating package.zip ..."
zip -vr package.zip \
css/ \
images/ \
js/agipdv.min.js \
js/background.js \
manifest.json
echo "Created package.zip ..."

restoreJs "js/agipdv.min.js"
restoreJs "js/background.js"
