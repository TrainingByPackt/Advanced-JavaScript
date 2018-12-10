import ReactDOM from 'react-dom';
const element = <div>HELLO WORLD!!!</div>;
ReactDOM.render( element, document.getElementById('root'), () => {
  console.log( 'Done rendering' );
});