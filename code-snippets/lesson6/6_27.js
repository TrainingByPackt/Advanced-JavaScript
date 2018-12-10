class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        Hello World!!! Made by {this.props.by}!!!
      </div>
    );
  }
}
ReactDOM.render(
  <HelloWorld by="Zach"/>,
document.getElementById('root')
);
