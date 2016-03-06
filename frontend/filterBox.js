export default (React) => {
  return React.createClass({
    getInitialState: function() {
      return { filter: '' };
    },
    onInput: function(event) {
      this.setState({ filter: event.target.value });
      this.props.onFilterChange(event.target.value);
    },
    focus: function() {
      this.setState({ focused: true });
    },
    blur: function() {
      this.setState({ focused: false });
    },
    render: function() {
      return (
        <input
          className="filter"
          type="text"
          placeholder="Add a filter..."
          value={this.state.filter}
          onChange={this.onInput}
          onFocus={this.focus}
          onBlur={this.blur}
          />
      );
    }
  });
};