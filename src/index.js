// index.js

var React = require('react');
var ReactDOM = require('react-dom');
var csvConverter = require('csvtojson').Converter;

require('./moneyInOut');
require('./lineItem');
require('./csvForm.js');
Budget = require('./budget.js');

ReactDOM.render(
  <Budget pollInterval={1000} />,
  document.getElementById('example')
);
