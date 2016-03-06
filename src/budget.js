export default (React, csvConverter, CsvForm, MoneyInOut, LineItemList, FilterBox) => {
  var Budget = React.createClass({
    loadCsv: function(csv) {
      var me = this;
      var converter = new csvConverter({});
      converter.fromString(csv, function(err, result) {
        if (err) {
          console.error(err);
          return;
        }

        me.setState({ json: result });
        return;
      });
      return;
    },

    filter: function(filter, json) {
      var me = this;

      if (!filter.length) {
        return json;
      }

      var display = [];

      me.state.json.forEach(function(item) {
        if (item.Description.toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
          display.push(item);
        }
      });

      return display;

    },

    updateFilter: function(newFilter) {
      console.log('Filter update', newFilter);
      this.setState({ filter: newFilter });
    },

    getInitialState: function() {
      return { json: [], filter: '' }
    },

    componentDidMount: function() {
      this.loadCsv('');
    },

    render: function() {
      console.log(this);
      return (
        <div className="budget">
          <CsvForm onCsvSubmit={this.loadCsv} />
          <MoneyInOut items={this.state.json} />
          <FilterBox onFilterChange={this.updateFilter} />
          <LineItemList items={this.filter(this.state.filter, this.state.json)} />
        </div>
      );
    }
  });

  return Budget;
};