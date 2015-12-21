var LineItem = React.createClass({
  date: function() {
    return this.props.line.Date;
  },
  description: function() {
    return this.props.line.Description;
  },
  amount: function() {
    if (this.props.line.Debit) {
      return this.props.line.Debit;
    } else {
      return this.props.line.Credit;
    }
  },
  balance: function() {
    return this.props.line.Balance;
  },
  render: function() {
    return (
      <tr>
        <td>{this.date()}</td>
        <td>{this.description()}</td>
        <td>{this.amount()}</td>
      </tr>
    );
  }
});

var LineItemList = React.createClass({
  render: function() {
    var items = this.props.items.map(function (line) {
      return (
        <LineItem line={line} />
      );
    });
    return (
      <table className="LineItemList">
        <tbody>
        {items}
        </tbody>
      </table>
    );
  }
});
