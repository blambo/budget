export default (React) => {
  return React.createClass({
    onCsv: function(event) {
      event.preventDefault();

      var csv = this.refs.csv.value.trim();
      if (!csv) {
        return;
      }
      this.props.onCsvSubmit(csv);
      this.refs.csv.value = '';
      return;
    },
    render: function() {
      return (
        <form className="csv-form" onSubmit={this.onCsv}>
          <textarea
            className="csv-textarea"
            placeholder="Insert your CSV here..."
            ref="csv"></textarea>
          <input type="submit" value="Post" />
        </form>
      );
    }
  });
};