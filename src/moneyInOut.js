export default (React) => {
  return React.createClass({
    calculate: function() {
      var items = this.props.items;
      var moneyIn = 0;
      var moneyOut = 0;

      for (var i = 0; i < items.length; i++) {
        if (items[i].Credit) {
          moneyIn += items[i].Credit;
        } else {
          moneyOut += items[i].Debit;
        }
      }

      this.setState({"in": moneyIn, "out": moneyOut});

      return;
    },
    componentDidMount: function() {
      setInterval(this.calculate, 2000);
    },
    getInitialState: function() {
      return {"in": 0, "out": 0};
    },
    render: function() {
      return (
        <table className="moneyInOut">
        <tbody>
          <tr>
            <td>Money in:</td><td>{this.state.in}</td>
          </tr>
          <tr>
            <td>Money out:</td><td>{this.state.out}</td>
          </tr>
          <tr>
            <td>Difference:</td><td>{this.state.in + this.state.out}</td>
          </tr>
        </tbody>
        </table>
      );
    }
  });
}