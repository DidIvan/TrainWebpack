/**
 * Created by Horbynko on 19.01.2016.
 */
'use strict';

const NODE_ENV = process.env.NODE_ENV || "development";
const WEBPACK = require('webpack');
module.exports = {
    entry: "./home",
    output: {
        filename: "build.js",
        library: 'home'
    },
    watch: NODE_ENV == "development",
    devtool: NODE_ENV == "development" ? 'cheap-inline-module-source-map' : null

};