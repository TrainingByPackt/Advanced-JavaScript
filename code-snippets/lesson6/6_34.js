class AccountControl extends React.Component {
  constructor( props ) {
    super( props );
    this.state = { account: this.props.account };
  }
  isLoggedIn() {
    if ( this.state.account ) { return <LogoutButton/>; }
    else { return <LoginButton/>; }
  }
  render() {
    return (
      <div>
        {this.isLoggedIn()}
        {this.state.account ? <LogoutButton/> : <LoginButton/>}
      </div>
    );
  }
}
