/*
Scenario: The Front End team working on your note taking app from Activity B has unexpectedly quit. You must build the front end for this application using React. Your front end should have two views, a Home view and an Edit view. Create a react component for each view. The home view should have a button that changes the view to the edit view. The edit view should have a button that switches back to the home view, a text input that contains the note text, a load button that calls the API load route, and a save button that calls the API save route. A NodeJS server has been provided to you. Write your React code in 'Lesson 6/topic c/activity/src/index.js.' When you are ready to test your code run the build script (defined in package.json) before starting the server. You can reference the index.html file from Activity B for hints on how to call the API routes.
 */

/*BUILD REACT FRONT END HERE*/
class App extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return <div>BUILD APP VIEW HERE</div>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById( 'root' )
);
