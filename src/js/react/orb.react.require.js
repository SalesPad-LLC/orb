/** @jsx React.DOM */

/* global module, require, React, window */
/*jshint node: true*/

'use strict';

var react = require('react');
var ReactDOM = require('react-dom');
var utils = require('../orb.utils');
var axe = require('../orb.axe');
var uiheaders = require('../orb.ui.header');
var filtering = require('../orb.filtering');
var reactUtils = require('./orb.react.utils');

var extraCol = 0;
var comps = module.exports;
