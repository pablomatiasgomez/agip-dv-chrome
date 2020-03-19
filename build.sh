#!/bin/bash

echo "Building app.."

JS_FILES="\
js/jquery-3.4.1.min.js \
js/Utils.js \
js/ApiConnector.js \
js/dv-generator/DVPatentes.js \
js/dv-generator/DVABL.js \
js/common/CommonDVPage.js \
js/common/TrackingHelper.js \
js/pages/BajaPatPage.js \
js/pages/ConsultaABLPage.js \
js/pages/ConsultaImpuestoInmobiliarioPage.js \
js/pages/ConsultaPatPage.js \
js/pages/ConsultaPubPage.js \
js/functions.js"
cat $JS_FILES > js/agipdv.min.js

echo "Build finished."
