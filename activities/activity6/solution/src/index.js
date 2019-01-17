/*
Scenario: The Front End team working on your note taking app from Activity B has unexpectedly quit. You must build the front end for this application using React. Your front end should have two views, a Home view and an Edit view. Create a react component for each view. The home view should have a button that changes the view to the edit view. The edit view should have a button that switches back to the home view, a text input that contains the note text, a load button that calls the API load route, and a save button that calls the API save route. A NodeJS server has been provided to you. Write your React code in 'Lesson 6/topic c/activity/src/index.js.' When you are ready to test your code run the build script (defined in package.json) before starting the server. You can reference the index.html file from Activity B for hints on how to call the API routes.
 */

class Home extends React.Component {
  goEdit() {
    this.props.changeView( 'editor' )
  }

  render() {
    return (
      <div>
        <h1>Note Editor App</h1>
        <button type="button" onClick={this.goEdit.bind( this )}>Edit Note</button>
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { value: '' };
  }

  handleChange( e ) {
    this.setState( { value: e.target.value } );
  }

  save() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if ( this.readyState != 4 ) {
        return
      }
      if ( this.status !== 200 ) {
        return console.error( 'Failed to save note!' );
      }
    };

    xhttp.open( "POST", "/save", true );
    xhttp.setRequestHeader( 'Content-Type', 'application/json;charset=UTF-8' );
    xhttp.send( JSON.stringify( this.state.value ) );
  }

  load() {
    const xhttp = new XMLHttpRequest();
    const that = this;

    xhttp.onreadystatechange = function () {
      if ( this.readyState != 4 ) {
        return
      }
      if ( this.status !== 200 ) {
        return console.error( 'Failed to load note!' );
      }
      that.setState( { value: JSON.parse( this.response ) } );
    };

    xhttp.open( "GET", "/load", true );
    xhttp.send();
  }

  goHome() {
    this.props.changeView( 'home' );
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.goHome.bind( this )}>Back to home</button>
        <input type="text" name="note text" value={this.state.value} onChange={this.handleChange.bind( this )}/>
        <button type="button" onClick={this.load.bind( this )}>Load</button>
        <button type="button" onClick={this.save.bind( this )}>Save</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { view: 'home' };
    this.changeView = this.changeView.bind( this );
  }

  changeView( view ) {
    this.setState( { view } )
  }

  render() {
    return <div>{this.state.view === 'home' ? <Home changeView={this.changeView}/> :
      <Editor changeView={this.changeView}/>}</div>;
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById( 'root' )
);

/* Hints
-Run `npm install` to install the required dependencies
-Create a Home and Editor component
-Add a constructor to the App class
--Set the state object to have a view property
---Default the view to 'home'
-Add a changeView method to the app
--The changeView method should take in a value and set state.view to that value with this.setState()
-In App's render function create a conditional rendering based on the value of this.state.view that either displays the Home component or the Editor component
--If state.view is equal to home, show the home view. Otherwise show the editor view
--Pass the changeView function as a parameter to both views
----<Editor changeView={this.changeView}/>
-In the Home component add a goEdit() function that calls the changeView function passed in through props. Have it set the view to 'editor'
--this.props.changeView( 'editor' )
-Create the render function in Home
--Add a title heading or div that contains the title of the app
--Add a button that changes the view to the edit view
---Calls the goEdit function on click
---Be sure to properly bind the this state
-Add a constructor to the Editor component
--In the constructor set the state that contains the value of the text input
-Add an input change handler to Editor
--Set state.value with the event value
--this.setState( { value: e.target.value } );
-Create a save function in Editor that calls the API save note route
--Create an XHR request that does a JSON post request to '/save'
--Send the value of the text input from the state variable
--Refer to the Topic B index.html file for implementation details
-Create a load function in Editor that calls the API load note route
--Create an XHR request that does a GET request to '/load'
--Save the returned text value into this.state.value
--Refer to the Topic B index.html file for implementation details
--You will have to save the component this scope into a variable in the load function so that it can be referenced from inside the XHR state change handler
-Create the render function in Editor
--Add a button that changes the state to the home view
---Calls the goHome function on the click event
--Add a Text field that contains the note value
---Text field loads it's value from the state.value field
---Text field calls the handleChange function on a value change
--Add a button to load the note data from the server
---Calls the load function on the click event
--Add a button to save the note data to the server
---Calls the save function on the click event
--Be sure to bind the this state properly to all listeners
-When ready to test the code
--Run `npm run build` in the root project folder to transpile the code from JSX
--Run `npm start` to start the server

 */
