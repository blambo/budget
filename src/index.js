// index.js

var React = require('react');
var ReactDOM = require('react-dom');
var csvConverter = require('csvtojson').Converter;

var MoneyInOut = require('./moneyInOut')(React);
var LineItem = require('./lineItem')(React);
var LineItemList = require('./lineItemList')(React, LineItem);
var CsvForm = require('./csvForm.js')(React);
var Budget = require('./budget.js')(React, csvConverter, CsvForm, MoneyInOut, LineItemList);

ReactDOM.render(
  <Budget pollInterval={1000} />,
  document.getElementById('example')
);
