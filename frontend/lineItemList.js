export default (React, LineItem) => {
  return React.createClass({
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
};