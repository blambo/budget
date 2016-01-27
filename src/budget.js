export default (React, csvConverter, CsvForm, MoneyInOut, LineItemList) => {
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

    getInitialState: function() {
      return { json: [] }
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
          <LineItemList items={this.state.json} />
        </div>
      );
    }
  });

  return Budget;
};