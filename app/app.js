/**
 *
 *
 */

'use strict';
import Fluxible from 'fluxible';
import fetchrPlugin from "fluxible-plugin-fetchr";

var app = new Fluxible({
    component: require('./components/Routes.jsx')
});

app.plug(fetchrPlugin({
  xhrPath: "/api"
}));

app.getPlugin('FetchrPlugin').registerService(require("./services/photo"));

app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/PhotoStore'));

module.exports = app;
