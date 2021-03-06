'use strict';

/**
 * @namespace Cat
 */

var server = require('server');

var cache = require('*/cartridge/scripts/middleware/cache');
//version 2
var catFactService = require('*/cartridge/scripts/catFactService.js');

/**
 * Cat-Fact : Reads cat facts
 * @name Cat-Fact
 * @param {middleware} - server.middleware.include
 */
server.get(
    'Fact',
    server.middleware.include,
    cache.applyDefaultCache,
    function (req, res, next) {

        /* Version 1
        var httpClient = new dw.net.HTTPClient();
        httpClient.open('GET', 'https://catfact.ninja/fact');
        httpClient.send();

        var catFact = JSON.parse(httpClient.text);
        */

        var catFact = JSON.parse(catFactService.getCatFact());

        res.render('cat', {
            catFact: catFact
        });
        next();
    }
);


module.exports = server.exports();
