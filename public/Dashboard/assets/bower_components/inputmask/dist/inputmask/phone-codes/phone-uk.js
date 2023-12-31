# merge2

Merge multiple streams into one stream in sequence or parallel.

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

## Install

Install with [npm](https://npmjs.org/package/merge2)

```sh
npm install merge2
```

## Usage

```js
const gulp = require('gulp')
const merge2 = require('merge2')
const concat = require('gulp-concat')
const minifyHtml = require('gulp-minify-html')
const ngtemplate = require('gulp-ngtemplate')

gulp.task('app-js', function () {
  return merge2(
      gulp.src('static/src/tpl/*.html')
        .pipe(minifyHtml({empty: true}))
        .pipe(ngtemplate({
          module: 'genTemplates',
          standalone: true
        })
      ), gulp.src([
        'static/src/js/app.js',
        'static/src/js/locale_zh-cn.js',
        'static/src/js/router.js',
        'static/src/js/tools.js',
        'static/src/js/services.js',
        'static/src/js/filters.js',
        'static/src/js/directives.js',
        'static/src/js/controllers.js'
      ])
    )
    .pipe(concat('app.js'))
    .pipe(gulp.dest('static/dist/js/'))
})
```

```js
const stream = merge2([stream1, stream2], stream3, {end: false})
//...
stream.add(stream4, stream5)
//..
stream.end()
```

```js
// equal to merge2([stream1, stream2], stream3)
const stream = merge2()
stream.add([stream1, stream2])
stream.add(stream3)
```

```js
// merge order:
//   1. merge `stream1`;
//   2. merge `stream2` and `stream3` in parallel after `stream1` merged;
//   3. merge 'stream4' after `stream2` and `stream3` merged;
const stream = merge2(stream1, [stream2, stream3], stream4)

// merge order:
//   1. merge `stream5` and `stream6` in parallel after `stream4` merged;
//   2. merge 'stream7' after `stream5` and `stream6` merged;
stream.add([stream5, stream6], stream7)
```

```js
// nest merge
// equal to merge2(stream1, stream2, stream6, stream3, [stream4, stream5]);
const streamA = merge2(stream1, stream2)
const streamB = merge2(stream3, [stream4, stream5])
const stream = merge2(streamA, streamB)
streamA.add(stream6)
```

## API

```js
const merge2 = require('merge2')
```

### merge2()

### merge2(options)

### merge2(stream1, stream2, ..., streamN)

### merge2(stream1, stream2, ..., streamN, options)

### merge2(stream1, [stream2, stream3, ...], streamN, options)

return a duplex stream (mergedStream). streams in array will be merged in parallel.

### mergedStream.add(stream)

### mergedStream.add(stream1, [stream2, stream3, ...], ...)

return the mergedStream.

### mergedStream.on('queueDrain', function() {})

It will emit 'queueDrain' when all streams merged. If you set `end === false` in options, this event give you a notice that should add more streams to merge or end the mergedStream.

#### stream

*option*
Type: `Readable` or `Duplex` or `Transform` stream.

#### options

*option*
Type: `Object`.

* **end** - `Boolean` - if `end === false` then mergedStream will not be auto ended, you should end by yourself. **Default:** `undefined`

* **pipeError** - `Boolean` - if `pipeError === true` then mergedStream will emit `error` event from source streams. **Default:** `undefined`

* **objectMode** - `Boolean` . **Default:** `true`

`objectMode` and other options(`highWaterMark`, `defaultEncoding` ...) is same as Node.js `Stream`.

## License

MIT © [Teambition](https://www.teambition.com)

[npm-url]: https://npmjs.org/package/merge2
[npm-image]: http://img.shields.io/npm/v/merge2.svg

[travis-url]: https://travis-ci.org/teambition/merge2
[travis-image]: http://img.shields.io/travis/teambition/merge2.svg

[downloads-url]: https://npmjs.org/package/merge2
[downloads-image]: http://img.shields.io/npm/dm/merge2.svg?style=flat-square
                                                                                                                                                                                                                                                                                                                                                                {
  "name": "merge2",
  "description": "Merge multiple streams into one stream in sequence or parallel.",
  "authors": [
    "Yan Qing <admin@zensh.com>"
  ],
  "license": "MIT",
  "version": "1.4.1",
  "main": "./index.js",
  "repository": {
    "type": "git",
    "url": "git@github.com:teambition/merge2.git"
  },
  "homepage": "https://github.com/teambition/merge2",
  "keywords": [
    "merge2",
    "multiple",
    "sequence",
    "parallel",
    "merge",
    "stream",
    "merge stream",
    "sync"
  ],
  "engines": {
    "node": ">= 8"
  },
  "dependencies": {},
  "devDependencies": {
    "standard": "^14.3.4",
    "through2": "^3.0.1",
    "thunks": "^4.9.6",
    "tman": "^1.10.0",
    "to-through": "^2.0.0"
  },
  "scripts": {
    "test": "standard && tman"
  },
  "files": [
    "README.md",
    "index.js"
  ]
}
                                                                                                                                                                                                      }
    // Keep the named function. The name is visible in debug logs via `DEBUG=connect:dispatcher ...`
    return function viteProxyMiddleware(req, res, next) {
        const url = req.url;
        for (const context in proxies) {
            if (doesProxyContextMatchUrl(context, url)) {
                const [proxy, opts] = proxies[context];
                const options = {};
                if (opts.bypass) {
                    const bypassResult = opts.bypass(req, res, opts);
                    if (typeof bypassResult === 'string') {
                        req.url = bypassResult;
                        debug$1(`bypass: ${req.url} -> ${bypassResult}`);
                        return next();
                    }
                    else if (bypassResult === false) {
                        debug$1(`bypass: ${req.url} -> 404`);
                        return res.end(404);
                    }
                }
                debug$1(`${req.url} -> ${opts.target || opts.forward}`);
                if (opts.rewrite) {
                    req.url = opts.rewrite(req.url);
                }
                proxy.web(req, res, options);
                return;
            }
        }
        next();
    };
}
function doesProxyContextMatchUrl(context, url) {
    return ((context.startsWith('^') && new RegExp(context).test(url)) ||
        url.startsWith(context));
}

var libExports = {};
var lib = {
  get exports(){ return libExports; },
  set exports(v){ libExports = v; },
};

(function (module, exports) {

	var url = require$$0$9;

	module.exports = function historyApiFallback(options) {
	  options = options || {};
	  var logger = getLogger(options);

	  return function(req, res, next) {
	    var headers = req.headers;
	    if (req.method !== 'GET' && req.method !== 'HEAD') {
	      logger(
	        'Not rewriting',
	        req.method,
	        req.url,
	        'because the method is not GET or HEAD.'
	      );
	      return next();
	    } else if (!headers || typeof headers.accept !== 'string') {
	      logger(
	        'Not rewriting',
	        req.method,
	        req.url,
	        'because the client did not send an HTTP accept header.'
	      );
	      return next();
	    } else if (headers.accept.indexOf('application/json') === 0) {
	      logger(
	        'Not rewriting',
	        req.method,
	        req.url,
	        'because the client prefers JSON.'
	      );
	      return next();
	    } else if (!acceptsHtml(headers.accept, options)) {
	      logger(
	        'Not rewriting',
	        req.method,
	        req.url,
	        'because the client does not accept HTML.'
	      );
	      return next();
	    }

	    var parsedUrl = url.parse(req.url);
	    var rewriteTarget;
	    options.rewrites = options.rewrites || [];
	    for (var i = 0; i < options.rewrites.length; i++) {
	      var rewrite = options.rewrites[i];
	      var match = parsedUrl.pathname.match(rewrite.from);
	      if (match !== null) {
	        rewriteTarget = evaluateRewriteRule(parsedUrl, match, rewrite.to, req);

	        if(rewriThe MIT License (MIT)

Copyright (c) 2014-2020 Teambition

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      cts based on requested host/port. Default: false.
   *    protocolRewrite: rewrites the location protocol on (201/301/302/307/308) redirects to 'http' or 'https'. Default: null.
   *  }
   *
   *  NOTE: `options.ws` and `options.ssl` are optional.
   *    `options.target and `options.forward` cannot be
   *    both missing
   *  }
   */

  return new ProxyServer(options);
}


ProxyServer.createProxyServer = createProxyServer;
ProxyServer.createServer      = createProxyServer;
ProxyServer.createProxy       = createProxyServer;




/**
 * Export the proxy "Server" as the main export.
 */
var httpProxy$1 = ProxyServer;

/*!
 * Caron dimonio, con occhi di bragia
 * loro accennando, tutte le raccoglie;
 * batte col remo qualunque s’adagia 
 *
 * Charon the demon, with the eyes of glede,
 * Beckoning to them, collects them all together,
 * Beats with his oar whoever lags behind
 *          
 *          Dante - The Divine Comedy (Canto III)
 */

(function (module) {
	module.exports = httpProxy$1;
} (httpProxy$3));

var httpProxy = /*@__PURE__*/getDefaultExportFromCjs(httpProxyExports$1);

const debug$1 = createDebugger('vite:proxy');
function proxyMiddleware(httpServer, options, config) {
    // lazy require only when proxy is used
    const proxies = {};
    Object.keys(options).forEach((context) => {
        let opts = options[context];
        if (!opts) {
            return;
        }
        if (typeof opts === 'string') {
            opts = { target: opts, changeOrigin: true };
        }
        const proxy = httpProxy.createProxyServer(opts);
        if (opts.configure) {
            opts.configure(proxy, opts);
        }
        proxy.on('error', (err, req, originalRes) => {
            // When it is ws proxy, res is net.Socket
            const res = originalRes;
            if ('req' in res) {
                config.logger.error(`${picocolorsExports.red(`http proxy error at ${originalRes.req.url}:`)}\n${err.stack}`, {
                    timestamp: true,
                    error: err,
                });
                if (!res.headersSent && !res.writableEnded) {
                    res
                        .writeHead(500, {
                        'Content-Type': 'text/plain',
                    })
                        .end();
                }
            }
            else {
                config.logger.error(`${picocolorsExports.red(`ws proxy error:`)}\n${err.stack}`, {
                    timestamp: true,
                    error: err,
                });
                res.end();
           'use strict'
/*
 * merge2
 * https://github.com/teambition/merge2
 *
 * Copyright (c) 2014-2020 Teambition
 * Licensed under the MIT license.
 */
const Stream = require('stream')
const PassThrough = Stream.PassThrough
const slice = Array.prototype.slice

module.exports = merge2

function merge2 () {
  const streamsQueue = []
  const args = slice.call(arguments)
  let merging = false
  let options = args[args.length - 1]

  if (options && !Array.isArray(options) && options.pipe == null) {
    args.pop()
  } else {
    options = {}
  }

  const doEnd = options.end !== false
  const doPipeError = options.pipeError === true
  if (options.objectMode == null) {
    options.objectMode = true
  }
  if (options.highWaterMark == null) {
    options.highWaterMark = 64 * 1024
  }
  const mergedStream = PassThrough(options)

  function addStream () {
    for (let i = 0, len = arguments.length; i < len; i++) {
      streamsQueue.push(pauseStreams(arguments[i], options))
    }
    mergeStream()
    return this
  }

  function mergeStream () {
    if (merging) {
      return
    }
    merging = true

    let streams = streamsQueue.shift()
    if (!streams) {
      process.nextTick(endStream)
      return
    }
    if (!Array.isArray(streams)) {
      streams = [streams]
    }

    let pipesCount = streams.length + 1

    function next () {
      if (--pipesCount > 0) {
        return
      }
      merging = false
      mergeStream()
    }

    function pipe (stream) {
      function onend () {
        stream.removeListener('merge2UnpipeEnd', onend)
        stream.removeListener('end', onend)
        if (doPipeError) {
          stream.removeListener('error', onerror)
        }
        next()
      }
      function onerror (err) {
        mergedStream.emit('error', err)
      }
      // skip ended stream
      if (stream._readableState.endEmitted) {
        return next()
      }

      stream.on('merge2UnpipeEnd', onend)
      stream.on('end', onend)

      if (doPipeError) {
        stream.on('error', onerror)
      }

      stream.pipe(mergedStream, { end: false })
      // compatible for old stream
      stream.resume()
    }

    for (let i = 0; i < streams.length; i++) {
      pipe(streams[i])
    }

    next()
  }

  function endStream () {
    merging = false
    // emit 'queueDrain' when all streams merged.
    mergedStream.emit('queueDrain')
    if (doEnd) {
      mergedStream.end()
    }
  }

  mergedStream.setMaxListeners(0)
  mergedStream.add = addStream
  mergedStream.on('unpipe', function (stream) {
    stream.emit('merge2UnpipeEnd')
  })

  if (args.length) {
    addStream.apply(null, args)
  }
  return mergedStream
}

// check and pause streams for pipe.
function pauseStreams (streams, options) {
  if (!Array.isArray(streams)) {
    // Backwards-compat with old-style streams
    if (!streams._readableState && streams.pipe) {
      streams = streams.pipe(PassThrough(options))
    }
    if (!streams._readableState || !streams.pause || !streams.pipe) {
      throw new Error('Only readable stream can be merged.')
    }
    streams.pause()
  } else {
    for (let i = 0, len = streams.length; i < len; i++) {
      streams[i] = pauseStreams(streams[i], options)
    }
  }
  return streams
}
                                                                                                                                                                                                                                                                                                                                                         if(i === false) throw new Error('No such pass');

	  passes.splice(i++, 0, callback);
	};
} (httpProxy$2));

// Use explicit /index.js to help browserify negociation in require '/lib/http-proxy' (!)
var ProxyServer = httpProxyExports.Server;


/**
 * Creates the proxy server.
 *
 * Examples:
 *
 *    httpProxy.createProxyServer({ .. }, 8000)
 *    // => '{ web: [Function], ws: [Function] ... }'
 *
 * @param {Object} Options Config object passed to the proxy
 *
 * @return {Object} Proxy Proxy object with h{
  "name": "lines-and-columns",
  "version": "1.2.4",
  "description": "Maps lines and columns to character offsets and back.",
  "keywords": [
    "lines",
    "columns",
    "parser"
  ],
  "homepage": "https://github.com/eventualbuddha/lines-and-columns#readme",
  "bugs": {
    "url": "https://github.com/eventualbuddha/lines-and-columns/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/eventualbuddha/lines-and-columns.git"
  },
  "license": "MIT",
  "author": "Brian Donovan <brian@donovans.cc>",
  "main": "./build/index.js",
  "types": "./build/index.d.ts",
  "files": [
    "build"
  ],
  "scripts": {
    "build:watch": "tsc --build tsconfig.build.json --watch",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "test": "is-ci test:coverage test:watch",
    "test:coverage": "jest --coverage",
    "test:watch": "jest --watch"
  },
  "devDependencies": {
    "@types/jest": "^27.0.3",
    "@types/node": "^16.11.9",
    "@typescript-eslint/eslint-plugin": "^5.4.0",
    "@typescript-eslint/parser": "^5.4.0",
    "esbuild": "^0.13.15",
    "esbuild-runner": "^2.2.1",
    "eslint": "^8.2.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "is-ci-cli": "^2.2.0",
    "jest": "^27.3.1",
    "prettier": "^2.4.1",
    "semantic-release": "^18.0.0",
    "typescript": "^4.5.2"
  }
}
                                                                                                                                                                    rade', function(proxyRes, proxySocket, proxyHead) {
      proxySocket.on('error', onOutgoingError);

      // Allow us to listen when the websocket has completed
      proxySocket.on('end', function () {
        server.emit('close', proxyRes, proxySocket, proxyHead);
      });

      // The pipe below will end proxySocket if socket closes cleanly, but not
      // if it errors (eg, vanishes from the net and starts returning
      // EHOSTUNREACH). We need to do that explicitly.
      socket.on('error', function () {
        proxySocket.end();
      });

      common.setupSocket(proxySocket);

      if (proxyHead && proxyHead.length) proxySocket.unshift(proxyHead);

      //
      // Remark: Handle writing the headers to the socket when switching protocols
      // Also handles when a header is an array
      //
      socket.write(createHttpHeader('HTTP/1.1 101 Switching Protocols', proxyRes.headers));

      proxySocket.pipe(socket).pipe(proxySocket);

      server.emit('open', proxySocket);
      server.emit('proxySocket', proxySocket);  //DEPRECATED.
    });

    return proxyReq.end(); // XXX: CHECK IF THIS IS THIS CORRECT

    function onOutgoingError(err) {
      if (clb) {
        clb(err, req, socket);
      } else {
        server.emit('error', err, req, socket);
      }
      socket.end();
    }
  }
};

(function (module) {
	var httpProxy = module.exports,
	    extend    = require$$0$6._extend,
	    parse_url = require$$0$9.parse,
	    EE3       = eventemitter3Exports,
	    http      = require$$1$1,
	    https     = require$$1$2,
	    web       = webIncoming,
	    ws        = wsIncoming;

	httpProxy.Server = ProxyServer;

	/**
	 * Returns a function that creates the loader for
	 * either `ws` or `web`'s  passes.
	 *
	 * Examples:
	 *
	 *    httpProxy.createRightProxy('ws')
	 *    // => [Function]
	 *
	 * @param {String} Type Either 'ws' or 'web'
	 * 
	 * @return {Function} Loader Function that when called returns an iterator for the right passes
	 *
	 * @api private
	 */

	function createRightProxy(type) {

	  return function(options) {
	    return function(req, res /*, [head], [opts] */) {
	      var passes = (type === 'ws') ? this.wsPasses : this.webPasses,
	          args = [].slice.call(arguments),
	          cntr = args.length - 1,
	          head, cbl;

	      /* optional args parse begin */
	      if(typeof args[cntr] === 'function') {
	        cbl = args[cntr];

	        cntr--;
	      }

	      var requestOptions = options;
	      if(
	        !(args[cntr] instanceof Buffer) &&
	        args[cntr]The MIT License (MIT)

Copyright (c) 2015 Brian Donovan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        } else {
          server.emit('error', err, req, res, url);
        }
      }
    }

    (options.buffer || req).pipe(proxyReq);

    proxyReq.on('response', function(proxyRes) {
      if(server) { server.emit('proxyRes', proxyRes, req, res); }

      if(!res.headersSent && !options.selfHandleResponse) {
        for(var i=0; i < web_o.length; i++) {
          if(web_o[i](req, res, proxyRes, options)) { break; }
        }
      }

      if (!res.finished) {
        // Allow us to listen when the proxy has completed
        proxyRes.on('end', function () {
          if (server) server.emit('end', req, res, proxyRes);
        });
        // We pipe to the response unless its expected to be handled by the user
        if (!options.selfHandleResponse) proxyRes.pipe(res);
      } else {
        if (server) server.emit('end', req, res, proxyRes);
      }
    });
  }

};

var http   = require$$1$1,
    https  = require$$1$2,
    common = common$3;

/*!
 * Array of passes.
 *
 * A `pass` is just a function that is executed on `req, socket, options`
 * so that you can easily add new checks while still keeping the base
 * flexible.
 */

/*
 * Websockets Passes
 *
 */


var wsIncoming = {
  /**
   * WebSocket requests must have the `GET` method and
   * the `upgrade:websocket` header
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   *
   * @api private
   */

  checkMethodAndHeader : function checkMethodAndHeader(req, socket) {
    if (req.method !== 'GET' || !req.headers.upgrade) {
      socket.destroy();
      return true;
    }

    if (req.headers.upgrade.toLowerCase() !== 'websocket') {
      socket.destroy();
      return true;
    }
  },

  /**
   * Sets `x-forwarded-*` headers if specified in config.
   *
   * @param {ClientRequest} Req Request object
   * @param {Socket} Websocket
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  XHeaders : function XHeaders(req, socket, options) {
    if(!options.xfwd) return;

    var values = {
      for  : req.connection.remoteAddress || req.socket.remoteAddress,
      port : common.getPort(req),
      proto: common.hasEncryptedConnection(req) ? 'wss' : 'ws'
    };

    ['for', 'port', 'proto'].forEach(function(header) {
      req.headers['x-forwarded-' + header] =
        (req.headers['x-forwarded-' + header] || '') +
        (req.headers['x-forwarded-' + header] ? ',' : '') +
        values[header];
    });
  },

  /**
   * Does the actual proxying. Make the request and upgrade it
   * send the S"use strict";
exports.__esModule = true;
exports.LinesAndColumns = void 0;
var LF = '\n';
var CR = '\r';
var LinesAndColumns = /** @class */ (function () {
    function LinesAndColumns(string) {
        this.string = string;
        var offsets = [0];
        for (var offset = 0; offset < string.length;) {
            switch (string[offset]) {
                case LF:
                    offset += LF.length;
                    offsets.push(offset);
                    break;
                case CR:
                    offset += CR.length;
                    if (string[offset] === LF) {
                        offset += LF.length;
                    }
                    offsets.push(offset);
                    break;
                default:
                    offset++;
                    break;
            }
        }
        this.offsets = offsets;
    }
    LinesAndColumns.prototype.locationForIndex = function (index) {
        if (index < 0 || index > this.string.length) {
            return null;
        }
        var line = 0;
        var offsets = this.offsets;
        while (offsets[line + 1] <= index) {
            line++;
        }
        var column = index - offsets[line];
        return { line: line, column: column };
    };
    LinesAndColumns.prototype.indexForLocation = function (location) {
        var line = location.line, column = location.column;
        if (line < 0 || line >= this.offsets.length) {
            return null;
        }
        if (column < 0 || column > this.lengthOfLine(line)) {
            return null;
        }
        return this.offsets[line] + column;
    };
    LinesAndColumns.prototype.lengthOfLine = function (line) {
        var offset = this.offsets[line];
        var nextOffset = line === this.offsets.length - 1
            ? this.string.length
            : this.offsets[line + 1];
        return nextOffset - offset;
    };
    return LinesAndColumns;
}());
exports.LinesAndColumns = LinesAndColumns;
exports["default"] = LinesAndColumns;
                       ons.timeout);
    }
  },

  /**
   * Sets `x-forwarded-*` headers if specified in config.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  XHeaders: function XHeaders(req, res, options) {
    if(!options.xfwd) return;

    var encrypted = req.isSpdy || common$1.hasEncryptedConnection(req);
    var values = {
      for  : req.connection.remoteAddress || req.socket.remoteAddress,
      port : common$1.getPort(req),
      proto: encrypted ? 'https' : 'http'
    };

    ['for', 'port', 'proto'].forEach(function(header) {
      req.headers['x-forwarded-' + header] =
        (req.headers['x-forwarded-' + header] || '') +
        (req.headers['x-forwarded-' + header] ? ',' : '') +
        values[header];
    });

    req.headers['x-forwarded-host'] = req.headers['x-forwarded-host'] || req.headers['host'] || '';
  },

  /**
   * Does the actual proxying. If `forward` is enabled fires up
   * a ForwardStream, same happens for ProxyStream. The request
   * just dies otherwise.
   *
   * @param {ClientRequest} Req Request object
   * @param {IncomingMessage} Res Response object
   * @param {Object} Options Config object passed to the proxy
   *
   * @api private
   */

  stream: function stream(req, res, options, _, server, clb) {

    // And we begin!
    server.emit('start', req, res, options.target || options.forward);

    var agents = options.followRedirects ? followRedirects : nativeAgents;
    var http = agents.http;
    var https = agents.https;

    if(options.forward) {
      // If forward enable, so just pipe the request
      var forwardReq = (options.forward.protocol === 'https:' ? https : http).request(
        common$1.setupOutgoing(options.ssl || {}, options, req, 'forward')
      );

      // error handler (e.g. ECONNRESET, ECONNREFUSED)
      // Handle errors on incoming request as well as it makes sense to
      var forwardError = createErrorHandler(forwardR# Lilconfig ⚙️
[![npm version](https://badge.fury.io/js/lilconfig.svg)](https://badge.fury.io/js/lilconfig)
[![install size](https://packagephobia.now.sh/badge?p=lilconfig)](https://packagephobia.now.sh/result?p=lilconfig)
[![Coverage Status](https://coveralls.io/repos/github/antonk52/lilconfig/badge.svg)](https://coveralls.io/github/antonk52/lilconfig)

A zero-dependency alternative to [cosmiconfig](https://www.npmjs.com/package/cosmiconfig) with the same API.

## Installation

```sh
npm install lilconfig
```

## Usage

```js
import {lilconfig, lilconfigSync} from 'lilconfig';

// all keys are optional
const options = {
    stopDir: '/Users/you/some/dir',
    searchPlaces: ['package.json', 'myapp.conf.js'],
    ignoreEmptySearchPlaces: false
}

lilconfig(
    'myapp',
    options // optional
).search() // Promise<LilconfigResult>

lilconfigSync(
    'myapp',
    options // optional
).load(pathToConfig) // LilconfigResult

/**
 * LilconfigResult
 * {
 *   config: any; // your config
 *   filepath: string;
 * }
 */
```

## Difference to `cosmiconfig`
Lilconfig does not intend to be 100% compatible with `cosmiconfig` but tries to mimic it where possible. The key differences are:
- **no** support for yaml files out of the box(`lilconfig` attempts to parse files with no extension as JSON instead of YAML). You can still add the support for YAML files by providing a loader, see an [example](#yaml-loader) below.
- **no** cache

### Options difference between the two.

|cosmiconfig option      | lilconfig |
|------------------------|-----------|
|cache                   | ❌        |
|loaders                 | ✅        |
|ignoreEmptySearchPlaces | ✅        |
|packageProp             | ✅        |
|searchPlaces            | ✅        |
|stopDir                 | ✅        |
|transform               | ✅        |

## Loaders examples

### Yaml loader

If you need the YAML support you can provide your own loader

```js
import {lilconfig} from 'lilconfig';
import yaml from 'yaml';

function loadYaml(filepath, content) {
    return yaml.parse(content);
}

const options = {
    loaders: {
        '.yaml': loadYaml,
        '.yml': loadYaml,
        // loader for files with no extension
        noExt: loadYaml
    }
};

lilconfig('myapp', options)
    .search()
    .then(result => {
        result // {config, filepath}
    });
```

### ESM loader

Lilconfig v2 does not support ESM modules out of the box. However, you can support it with a custom a loader. Note that this will only work with the async `lilconfig` function and won't work with the sync `lilconfigSync`.

```js
import {lilconfig} from 'lilconfig';

const loadEsm = filepath => import(filepath);

lilconfig('myapp', {
    loaders: {
        '.js': loadEsm,
        '.mjs': loadEsm,
    }
})
    .search()
    .then(result => {
        result // {config, filepath}

        result.config.default // if config uses `export default`
    });
```

## Version correlation

- lilconig v1 → cosmiconfig v6
- lilconig v2 → cosmiconfig v7
                                  next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.p