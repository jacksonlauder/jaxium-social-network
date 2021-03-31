'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setEnvironment = setEnvironment;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setEnvironment(app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app);
  } else {
    setProdEnv(app);
  }
}

function setDevEnv(app) {
  process.env.NODE_ENV = 'development';
  process.env.DB_URL = 'mongodb://localhost:27017/jaxium-db';
  process.env.TOKEN_SECRET = '10596874-jaxium-social-network-development-secret';
  app.use(_bodyParser2.default.json());
  app.use((0, _morgan2.default)('dev'));
  app.use((0, _cors2.default)());
}

function setProdEnv(app) {
  process.env.DB_URL = 'mongodb://localhost:27017/jaxium-prod-db';
  process.env.TOKEN_SECRET = '10596874-jaxium-social-network-production-secret';
  app.use(_bodyParser2.default.json());
  app.use(_express2.default.static(__dirname + '/../../dist'));
}