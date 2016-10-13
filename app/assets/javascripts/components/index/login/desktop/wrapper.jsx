import vm from '../viewmodel';
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state      = vm({}, {type: 'init'});
    this.dispatcher = this.dispatcher.bind(this);
    this.callback   = this.callback.bind(this);
    this.onSubmit   = this.onSubmit.bind(this);
  }
  dispatcher(action) {
    this.setState(vm(this.state, action));
  }
  callback(response) {
    var action = {
      type: 'update_response',
      data: response
    };
    this.dispatcher(action);
  }
  onSubmit(e) {
    e.preventDefault();
    var data = $('#login-form-desktop').serializeArray();
    Service.authentication.login(data, this.callback);
    return false;
  }
	render() {
    var errorClass = this.state.success ? "" : " error-form";
		return (
			<div className="uk-hidden-small" id="login-section" style={{display: this.props.toggle ? "" : "none"}}>
				<form id="login-form-desktop" onSubmit={this.onSubmit} action="/users/sign_in" method="post" className="uk-width-8-10 uk-container-center">
          <input name="authenticity_token" type="hidden" value={this.props.token}/>
					<div className="uk-width-1-1">
						<h5 className={"no-margin uk-text-uppercase"}>Email</h5>
						<input className={"bb-input uk-width-1-1" + errorClass} name="email" />
					</div>
          <div className="uk-width-1-1 uk-margin-top">
						<h5 className={"no-margin uk-text-uppercase"}>Password</h5>
						<input className={"bb-input uk-width-1-1" + errorClass} type="password" name="password"/>
					</div>
          <input className="bb-button uk-width-1-1 uk-text-uppercase uk-margin-top" value="LOGIN" type="submit"/>
          <div className="uk-width-1-1 uk-flex uk-flex-center uk-margin-top">
            <a>forget password?</a>
          </div>
				</form>
			</div>
		);
	}
}

export default Wrapper;
