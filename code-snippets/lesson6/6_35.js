class ListElement extends React.Component {
  render() {
    return (
      <ul> {this.props.items.map( i => <li>{i}</li> )} </ul>
    );
  }
}
ReactDOM.render(
  <ListElement items={[ 1, 4, 5, 5, 7, 9 ]}/>,
  document.getElementById( 'root' )
);
