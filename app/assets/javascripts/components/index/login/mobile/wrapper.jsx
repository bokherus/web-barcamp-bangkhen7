import vm from '../viewmodel';
class Wrapper extends React.Component {
	constructor(props) {
		super(props);
    this.close      = this.close.bind(this);
    this.state      = vm({}, {type: 'init'});
    this.dispatcher = this.dispatcher.bind(this);
    this.callback   = this.callback.bind(this);
    this.onSubmit   = this.onSubmit.bind(this);
	}

  dispatcher(action) {
    this.setState(vm(this.state, action));
  }
	toggle(toggle) {
		var element = $("#login-mobile-wrapper");
		element.removeClass('push-up');
		element.removeClass('push-down');
		if (toggle) {
			UIkit.offcanvas.hide('#offcanvas-1');
			element.addClass('push-up');
		} else {
			element.addClass('push-down');
		}
	}
	componentWillUpdate(nextProps, nextState) {
		this.toggle(nextProps.toggle);
	}
	close() {
		this.toggle(false);
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
    var data = $('#login-form-mobile').serializeArray();
    Service.authentication.login(data, this.callback);
    return false;
  }
	render() {
    var errorClass = this.state.success ? "" : " error-form";
		return (
			<div id="login-mobile-wrapper" className="full-height full-width uk-hidden-large uk-hidden-medium uk-flex uk-flex-center uk-flex-column">
				<i onClick={this.close} className="uk-icon-close close-icon uk-icon-small"></i>
				<div className="pull-top uk-width-1-1 uk-flex uk-flex-center" style={{
					marginTop: "5%"
				}}>
					<div className="uk-width-3-10 uk-container-center">
						<img src={this.props.logo}/>
					</div>
				</div>
				<form id="login-form-mobile" onSubmit={this.onSubmit} >
					<div className="uk-width-8-10 uk-container-center uk-flex uk-flex-center uk-flex-column">
						<h2 className="uk-text-center">E-mail</h2>
						<input name="email" className={"bb-input uk-text-center" + errorClass}/>
						<h2 className="uk-text-center">Password</h2>
						<input name="password" className={"bb-input uk-text-center" + errorClass} type="password"/>
						<div className="pull-bottom pull-left uk-width-1-1 uk-flex uk-flex-center uk-flex-column" style={{marginBottom: "5%"}}>
							<button className="uk-width-3-10 uk-container-center uk-text-uppercase flat-white-button flat-button-big uk-button" style={{
								marginTop: 30
							}}>Login</button>
              <a className="uk-margin-top uk-text-center">forget password?</a>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Wrapper;
