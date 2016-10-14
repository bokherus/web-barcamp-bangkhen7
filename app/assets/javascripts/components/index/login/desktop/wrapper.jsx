import vm from '../viewmodel';
import Input from '../../../input.jsx';
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
			<div className="uk-hidden-small" id="login-section" style={{display: this.props.toggle ? "" : "none" , paddingTop: 30, paddingBottom: 30}}>
				<form id="login-form-desktop" onSubmit={this.onSubmit} action="/users/sign_in" method="post" className="uk-width-8-10 uk-container-center">
          <input name="authenticity_token" type="hidden" value={this.props.token}/>
					<div className="uk-width-1-1 uk-flex uk-flex-column">
            <Input success={this.state.success} thin label="E-Mail" name="email" center/>
            <Input success={this.state.success} thin className="uk-margin-top" label="Password" name="password" center type="password" />
            <button className="flat-white-button uk-width-6-10 uk-container-center" style={{marginTop: 25}}>Login</button>
            <a href="/resend" className="uk-margin-top uk-text-center thin">forget password?</a>
          </div>
				</form>
			</div>
		);
	}
}

export default Wrapper;
