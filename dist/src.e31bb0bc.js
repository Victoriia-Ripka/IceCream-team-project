// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"C:\\project-demo\\src\\images\\mobile\\order-form\\order-form-bg-mob-X1.jpg":[["order-form-bg-mob-X1.a517c9e1.jpg","images/mobile/order-form/order-form-bg-mob-X1.jpg"],"images/mobile/order-form/order-form-bg-mob-X1.jpg"],"C:\\project-demo\\src\\images\\mobile\\order-form\\order-form-bg-mob-X2.jpg":[["order-form-bg-mob-X2.0251e6fb.jpg","images/mobile/order-form/order-form-bg-mob-X2.jpg"],"images/mobile/order-form/order-form-bg-mob-X2.jpg"],"C:\\project-demo\\src\\images\\desktop\\order-form\\order-form-bg1280-desk-X1.jpg":[["order-form-bg1280-desk-X1.7f0f07c9.jpg","images/desktop/order-form/order-form-bg1280-desk-X1.jpg"],"images/desktop/order-form/order-form-bg1280-desk-X1.jpg"],"C:\\project-demo\\src\\images\\desktop\\order-form\\order-form-bg1280-desk-X2.jpg":[["order-form-bg1280-desk-X2.26636c15.jpg","images/desktop/order-form/order-form-bg1280-desk-X2.jpg"],"images/desktop/order-form/order-form-bg1280-desk-X2.jpg"],"C:\\project-demo\\src\\images\\svg\\check.svg":[["check.14ff3e2a.svg","images/svg/check.svg"],"images/svg/check.svg"],"C:\\project-demo\\src\\images\\mobile\\products\\icecream.png":[["icecream.2c6cd0c3.png","images/mobile/products/icecream.png"],"images/mobile/products/icecream.png"],"C:\\project-demo\\src\\images\\mobile\\products\\icecream2x.png":[["icecream2x.079a4ff3.png","images/mobile/products/icecream2x.png"],"images/mobile/products/icecream2x.png"],"C:\\project-demo\\src\\images\\tablet\\products\\icecream.png":[["icecream.6f668a83.png","images/tablet/products/icecream.png"],"images/tablet/products/icecream.png"],"C:\\project-demo\\src\\images\\tablet\\products\\icecream2x.png":[["icecream2x.755d238b.png","images/tablet/products/icecream2x.png"],"images/tablet/products/icecream2x.png"],"C:\\project-demo\\src\\images\\desktop\\products\\icecream.png":[["icecream.0c9d64fc.png","images/desktop/products/icecream.png"],"images/desktop/products/icecream.png"],"C:\\project-demo\\src\\images\\desktop\\products\\icecream2x.png":[["icecream2x.10aa630e.png","images/desktop/products/icecream2x.png"],"images/desktop/products/icecream2x.png"],"C:\\project-demo\\src\\images\\mobile\\products\\coffee.png":[["coffee.78bae489.png","images/mobile/products/coffee.png"],"images/mobile/products/coffee.png"],"C:\\project-demo\\src\\images\\mobile\\products\\coffee2x.png":[["coffee2x.84844c01.png","images/mobile/products/coffee2x.png"],"images/mobile/products/coffee2x.png"],"C:\\project-demo\\src\\images\\tablet\\products\\coffee.png":[["coffee.13355b93.png","images/tablet/products/coffee.png"],"images/tablet/products/coffee.png"],"C:\\project-demo\\src\\images\\tablet\\products\\coffee2x.png":[["coffee2x.aa76476a.png","images/tablet/products/coffee2x.png"],"images/tablet/products/coffee2x.png"],"C:\\project-demo\\src\\images\\desktop\\products\\coffee.png":[["coffee.c62cc25c.png","images/desktop/products/coffee.png"],"images/desktop/products/coffee.png"],"C:\\project-demo\\src\\images\\desktop\\products\\coffee2x.png":[["coffee2x.1ac7e261.png","images/desktop/products/coffee2x.png"],"images/desktop/products/coffee2x.png"],"C:\\project-demo\\src\\images\\mobile\\products\\milkshake.png":[["milkshake.47b63483.png","images/mobile/products/milkshake.png"],"images/mobile/products/milkshake.png"],"C:\\project-demo\\src\\images\\mobile\\products\\milkshake2x.png":[["milkshake2x.00132289.png","images/mobile/products/milkshake2x.png"],"images/mobile/products/milkshake2x.png"],"C:\\project-demo\\src\\images\\tablet\\products\\milkshake.png":[["milkshake.bc181686.png","images/tablet/products/milkshake.png"],"images/tablet/products/milkshake.png"],"C:\\project-demo\\src\\images\\tablet\\products\\milkshake2x.png":[["milkshake2x.9662d34b.png","images/tablet/products/milkshake2x.png"],"images/tablet/products/milkshake2x.png"],"C:\\project-demo\\src\\images\\desktop\\products\\milkshake.png":[["milkshake.ca9845a8.png","images/desktop/products/milkshake.png"],"images/desktop/products/milkshake.png"],"C:\\project-demo\\src\\images\\desktop\\products\\milkshake2x.png":[["milkshake2x.eaeb4798.png","images/desktop/products/milkshake2x.png"],"images/desktop/products/milkshake2x.png"],"C:\\project-demo\\src\\images\\svg\\dots.svg":[["dots.60bf0c7a.svg","images/svg/dots.svg"],"images/svg/dots.svg"],"C:\\project-demo\\src\\images\\mobile\\products\\arrow-right.png":[["arrow-right.559eb9eb.png","images/mobile/products/arrow-right.png"],"images/mobile/products/arrow-right.png"],"C:\\project-demo\\src\\images\\mobile\\products\\arrow-right2x.png":[["arrow-right2x.453a7a1c.png","images/mobile/products/arrow-right2x.png"],"images/mobile/products/arrow-right2x.png"],"C:\\project-demo\\src\\images\\mobile\\products\\arrow-up.png":[["arrow-up.d9f178a5.png","images/mobile/products/arrow-up.png"],"images/mobile/products/arrow-up.png"],"C:\\project-demo\\src\\images\\mobile\\products\\arrow-up2x.png":[["arrow-up2x.1acf2ff7.png","images/mobile/products/arrow-up2x.png"],"images/mobile/products/arrow-up2x.png"],"C:\\project-demo\\src\\images\\mobile\\about\\1milk.png":[["1milk.31308968.png","images/mobile/about/1milk.png"],"images/mobile/about/1milk.png"],"C:\\project-demo\\src\\images\\mobile\\about\\2milk.png":[["2milk.560cc645.png","images/mobile/about/2milk.png"],"images/mobile/about/2milk.png"],"C:\\project-demo\\src\\images\\mobile\\about\\1milk2x.png":[["1milk2x.24d9525d.png","images/mobile/about/1milk2x.png"],"images/mobile/about/1milk2x.png"],"C:\\project-demo\\src\\images\\mobile\\about\\2milk2x.png":[["2milk2x.dabb5612.png","images/mobile/about/2milk2x.png"],"images/mobile/about/2milk2x.png"],"C:\\project-demo\\src\\images\\mobile\\advantages\\icon1.png":[["icon1.d02ccf8b.png","images/mobile/advantages/icon1.png"],"images/mobile/advantages/icon1.png"],"C:\\project-demo\\src\\images\\mobile\\advantages\\icon1@2x.png":[["icon1@2x.0a39ca58.png","images/mobile/advantages/icon1@2x.png"],"images/mobile/advantages/icon1@2x.png"],"C:\\project-demo\\src\\images\\mobile\\advantages\\icon2.png":[["icon2.0b17991d.png","images/mobile/advantages/icon2.png"],"images/mobile/advantages/icon2.png"],"C:\\project-demo\\src\\images\\mobile\\advantages\\icon2@2x.png":[["icon2@2x.11f93799.png","images/mobile/advantages/icon2@2x.png"],"images/mobile/advantages/icon2@2x.png"],"C:\\project-demo\\src\\images\\mobile\\advantages\\icon3.png":[["icon3.aa03c00e.png","images/mobile/advantages/icon3.png"],"images/mobile/advantages/icon3.png"],"C:\\project-demo\\src\\images\\mobile\\advantages\\icon3@2x.png":[["icon3@2x.871486e4.png","images/mobile/advantages/icon3@2x.png"],"images/mobile/advantages/icon3@2x.png"],"C:\\project-demo\\src\\images\\mobile\\testimonials\\home1.svg":[["home1.5fdac489.svg","images/mobile/testimonials/home1.svg"],"images/mobile/testimonials/home1.svg"],"C:\\project-demo\\src\\images\\mobile\\testimonials\\11.png":[["11.675ea075.png","images/mobile/testimonials/11.png"],"images/mobile/testimonials/11.png"],"C:\\project-demo\\src\\images\\mobile\\testimonials\\112x.png":[["112x.a5894c9b.png","images/mobile/testimonials/112x.png"],"images/mobile/testimonials/112x.png"],"C:\\project-demo\\src\\images\\mobile\\testimonials\\dots-mark.png":[["dots-mark.a4803dbb.png","images/mobile/testimonials/dots-mark.png"],"images/mobile/testimonials/dots-mark.png"],"C:\\project-demo\\src\\images\\mobile\\testimonials\\dots-mark@2x.png":[["dots-mark@2x.6c98f8ec.png","images/mobile/testimonials/dots-mark@2x.png"],"images/mobile/testimonials/dots-mark@2x.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64591" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map