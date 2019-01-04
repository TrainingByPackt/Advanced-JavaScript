var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        React.createElement('input', { type: 'text', name: 'Note Text', value: this.state.value, onChange: this.handleChange.bind(this) }),
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