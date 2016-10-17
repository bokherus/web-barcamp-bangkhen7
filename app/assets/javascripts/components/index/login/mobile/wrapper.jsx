import vm from '../viewmodel';
import Input from '../../../input.jsx';
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
			// UIkit.offcanvas.hide('#offcanvas-1');
			element.addClass('push-up');
		} else {
			element.addClass('push-down');
		}
	}
	componentWillUpdate(nextProps, nextState) {
		// this.toggle(nextProps.toggle);
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
		return (
			<div id="login-mobile-wrapper" className="full-height full-width uk-hidden-large uk-hidden-medium uk-flex uk-flex-center uk-flex-column">
				<i onClick={this.close} className="uk-icon-close close-icon uk-icon-small"></i>
				<form id="login-form-mobile" onSubmit={this.onSubmit} >
					<div className="uk-width-8-10 uk-container-center uk-flex uk-flex-center uk-flex-column parking-card" style={{paddingTop: "10vh", paddingBottom:"10vh"}}>
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
