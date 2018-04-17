var Builder = require("systemjs-builder");

var builder = new Builder("./");
builder.config({
    paths: {
        "rxjs/*": "node_modules/rx/dist/*.js"
    },
    map: {
        "rxjs": "node_modules/rx/dist"
    },
    packages: {
        "rxjs": { main: "Rx.js", defaultExtensions: "js"}
    }
});

builder.bundle("rxjs", "rxjs.module.min.js", {
    normalize: true,
    runtime: false,
    minify: true,
    mangle: false
});