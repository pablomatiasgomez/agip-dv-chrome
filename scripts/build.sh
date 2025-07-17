#!/bin/bash
set -e

echo "Building app.."

JS_FILES="\
js/jquery-3.6.0.min.js \
js/embrace-web-sdk-1.7.1.js \
js/Utils.js \
js/ApiConnector.js \
js/dv-generator/DVPatentes.js \
js/dv-generator/DVABL.js \
js/common/CommonDVPage.js \
js/common/TrackingHelper.js \
js/pages/ConsultaPatPage.js \
js/pages/BajaPatPage.js \
js/pages/ConsultaABLPage.js \
js/pages/ConsultaImpuestoInmobiliarioPage.js \
js/pages/ConsultaVIRPage.js \
js/pages/ConsultaPubPage.js \
js/main.js"
cat $JS_FILES > js/agipdv.min.js

echo "Build finished."
