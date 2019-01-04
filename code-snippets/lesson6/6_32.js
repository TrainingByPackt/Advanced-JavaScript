class ChildElement extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}
class ParentElement extends React.Component {
  clicked() { console.log( 'clicked' ); }
  render() {
    return <ChildElement onClick={this.clicked}/>;
  }
}
