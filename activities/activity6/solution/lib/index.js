var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
Scenario: The Front End team working on your note taking app from Activity B has unexpectedly quit. You must build the front end for this application using React. Your front end should have two views, a Home view and an Edit view. Create a react component for each view. The home view should have a button that changes the view to the edit view. The edit view should have a button that switches back to the home view, a text input that contains the note text, a load button that calls the API load route, and a save button that calls the API save route. A NodeJS server has been provided to you. Write your React code in 'Lesson 6/topic c/activity/src/index.js.' When you are ready to test your code run the build script (defined in package.json) before starting the server. You can reference the index.html file from Activity B for hints on how to call the API routes.
 */

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'goEdit',
    value: function goEdit() {
      this.props.changeView('editor');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Note Editor App'
        ),
        React.createElement(
          'button',
          { type: 'button', onClick: this.goEdit.bind(this) },
          'Edit Note'
        )
      );
    }
  }]);

  return Home;
}(React.Component);

var Editor = function (_React$Component2) {
  _inherits(Editor, _React$Component2);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this2 = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    _this2.state = { value: '' };
    return _this2;
  }

  _createClass(Editor, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'save',
    value: function save() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState != 4) {
          return;
        }
        if (this.status !== 200) {
          return console.error('Failed to save note!');
        }
      };

      xhttp.open("POST", "/save", true);
      xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhttp.send(JSON.stringify(this.state.value));
    }
  }, {
    key: 'load',
    value: function load() {
      var xhttp = new XMLHttpRequest();
      var that = this;

      xhttp.onreadystatechange = function () {
        if (this.readyState != 4) {
          return;
        }
        if (this.status !== 200) {
          return console.error('Failed to load note!');
        }
        that.setState({ value: JSON.parse(this.response) });
      };

      xhttp.open("GET", "/load", true);
      xhttp.send();
    }
  }, {
    key: 'goHome',
    value: function goHome() {
      this.props.changeView('home');
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { type: 'button', onClick: this.goHome.bind(this) },
          'Back to home'
        ),
        React.createElement('input', { type: 'text', name: 'note text', value: this.state.value, onChange: this.handleChange.bind(this) }),
        React.createElement(
          'button',
          { type: 'button', onClick: this.load.bind(this) },
          'Load'
        ),
        React.createElement(
          'button',
          { type: 'button', onClick: this.save.bind(this) },
          'Save'
        )
      );
    }
  }]);

  return Editor;
}(React.Component);

var App = function (_React$Component3) {
  _inherits(App, _React$Component3);

  function App(props) {
    _classCallCheck(this, App);

    var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this3.state = { view: 'home' };
    _this3.changeView = _this3.changeView.bind(_this3);
    return _this3;
  }

  _createClass(App, [{
    key: 'changeView',
    value: function changeView(view) {
      this.setState({ view: view });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.view === 'home' ? React.createElement(Home, { changeView: this.changeView }) : React.createElement(Editor, { changeView: this.changeView })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

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