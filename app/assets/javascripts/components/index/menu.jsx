import Menu from 'react-burger-menu';
var Slide = Menu.push;
import LoginDesktop from './login/desktop/wrapper.jsx';
import vm from './viewmodel';
class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = vm({}, { type: 'init' });
    this.showLogin = this.showLogin.bind(this);
    this.dispatcher = this.dispatcher.bind(this);

  }
  dispatcher(action) {
    this.setState(vm(this.state, action));
  }
  componentDidMount() {
    var self = this;
    if(this.props.redirect === false) {
      $('.scroll-d').click(function(event) {
        event.preventDefault();
        self.scroll(this.hash);
        return false;
      });
    }
    // var path = $(location).attr('href');
    // if(path.indexOf("#") >= 0) {
    //   var elementName = path.substring(path.indexOf("#"));
    //   this.scroll(elementName);
    // }
  }
  scroll(element) {
    $('html,body').animate({
      scrollTop: $(element).position().top
    }, 500);
  }
  showLogin() {
    this.setState({
      loginToggle: !this.state.loginToggle
    });
  }
	render() {
    var loginView = <a className="uk-text-uppercase" onClick={this.showLogin}>Login</a>;
    if(this.props.user !== null) {
      loginView = <a className="uk-text-uppercase">{this.props.user.email}</a>;
    }
		return (
			<div style={{position: "relative"}}>
				<nav className="uk-navbar flex flex-center-x">
					<ul className="uk-navbar-nav uk-hidden-small uk-flex uk-flex-center uk-flex-middle navbar uk-hidden-small">
						<li>
							<a className="scroll-d uk-text-uppercase bcbk" href={this.props.redirect ? "/#index-section" : "#index-section"}>BCBK</a>
						</li>
						<li>
							<a className="scroll-d uk-text-uppercase" href={this.props.redirect ? "/#register-section" : "#register-section"}>Register</a>
						</li>
						<li>
							<a className="scroll-d uk-text-uppercase" href={this.props.redirect ? "/#schedule-section" : "#schedule-section"}>Schedule</a>
						</li>
						<li>
							<a className="scroll-d uk-text-uppercase" href={this.props.redirect ? "/#location-section" : "#location-section"}>Location</a>
						</li>
						<li>
							<a className="scroll-d uk-text-uppercase" href={this.props.redirect ? "/" : "#sponsors-section"}>Sponsors</a>
						</li>
						<li>
							<a className="uk-text-uppercase" href="/resend">Resend Email</a>
						</li>
						<li>
							<a className="uk-text-uppercase" href="/participants">Participants</a>
						</li>
						<li>
							<a className="uk-text-uppercase" href="/sessions">Sessions</a>
						</li>
            <li>
							{loginView}
						</li>
					</ul>
					<a href="#offcanvas-1" className="uk-navbar-toggle uk-visible-small" style={{position: "fixed"}} data-uk-offcanvas="{mode:'slide'}"></a>
				</nav>
				<div id="offcanvas-1" className="uk-offcanvas mobile-menu" aria-hidden="true">
					<div className="uk-offcanvas-bar mobile-menu-canvas-bar" mode="slide">
						<div className="uk-panel">
							<li className="uk-margin-bottom uk-margin-top">
								<a className="scroll uk-text-uppercase bcbk" href="#index-section">bcbk</a>
							</li>
              <li className="menu-divider"></li>
							<li>
								<a className="scroll" href="/login">Login</a>
							</li>
							<li>
								<a className="scroll" href="#register-section">Register</a>
							</li>
							<li>
								<a className="scroll" href="#schedule-section">Schedule</a>
							</li>
							<li>
								<a className="scroll" href="#location-section">Location</a>
							</li>
							<li>
								<a className="scroll" href="#sponsors-section">Sponsors</a>
							</li>
							<li>
								<a href="/resend">Resend Email</a>
							</li>
							<li>
								<a href="/participants">Participants</a>
							</li>
							<li>
								<a href="/sessions">Sessions</a>
							</li>
						</div>
					</div>
				</div>
        <LoginDesktop toggle={this.state.loginToggle} token={this.props.token}/>
			</div>

		);
	}
}

export default Menus;
