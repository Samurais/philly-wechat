'use strict';

var path = require('path'),
    _ = require('lodash');

var env = process.env.NODE_ENV || 'development';
env = env.toLowerCase();

var all = {
    env: process.env.NODE_ENV,
    parse: {
        appId: 'philly_parse_local',
        serverURL: 'http://localhost:1337/parse',
        masterKey: '',
        javascriptKey: '',
    },
    // only reply to @botName in Group 
    botName: '瓦力'
};
module.exports = _.merge(all, require('./' + env + '.js') || {});
