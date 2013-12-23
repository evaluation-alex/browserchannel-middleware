/*
 * Copyright 2013 msiviero <m.siviero83@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 *     
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

BrowserChannel = require('./BrowserChannel');
BrowserChannelHandler = require('./BrowserChannelHandler');
SessionMgr = require('./session/SessionMgr');

/**
 * @param {Object} opts
 * @return {Function}
 */
module.exports = function(opts) {
    // here is the right place to create application scoped objects
    var sessionMgr = new SessionMgr();

    return function(request, response, next) {
        var channel = new BrowserChannel(sessionMgr, opts.handler, opts.debug);
        channel.handle(request, response, next);
    };
};


module.exports = {
    Handler: BrowserChannelHandler,
    server: function(opts) {
        // here is the right place to create application scoped objects
        var sessionMgr = new SessionMgr();

        return function(request, response, next) {
            var channel = new BrowserChannel(sessionMgr, opts.handler, opts.debug);
            channel.handle(request, response, next);
        };
    }
};
