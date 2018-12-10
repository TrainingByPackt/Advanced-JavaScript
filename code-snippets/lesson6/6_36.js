class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleChange(event) { this.setState({value: event.target.value}); }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <div>Value: {this.state.value} </div>
      </div>
    );
  }
}
