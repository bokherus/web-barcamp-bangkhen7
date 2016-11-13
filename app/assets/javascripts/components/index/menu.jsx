import Menu from 'react-burger-menu';
var Slide = Menu.push;
import LoginDesktop from './login/desktop/wrapper.jsx';
import LoginMobile from './login/mobile/wrapper.jsx';
import vm from './viewmodel';
class Menus extends React.Component {
  constructor(props) {
    super(props);
    this.state = vm({}, { type: 'init' });
    this.showLogin = this.showLogin.bind(this);
    this.dispatcher = this.dispatcher.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
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
      $('.scroll').click(function(event) {
        event.preventDefault();
        self.scroll(this.hash);
        self.toggleMobileMenu();
        return false;
      });
    }
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

  toggleMobileMenu() {
    var toggle = !this.state.mobileToggle;
    this.dispatcher({type: 'toggle_mobile_menu', toggle: !this.state.mobileToggle});
    var element = $("#mobile-menu");
    var blurElement = $('.blur');
    element.removeClass("mobile-menu-hide");
    element.removeClass("mobile-menu-show");
    if(toggle) {
      element.addClass("mobile-menu-show");
      blurElement.addClass('blur-true');
    }else {
      element.addClass("mobile-menu-hide");
      blurElement.removeClass('blur-true');
    }
    return false;
  }
	render() {
    var loginViewDesktop = <a className="uk-text-uppercase" onClick={this.showLogin}>Login</a>;
    var loginViewMobile = <a onClick={this.showLogin}>Login</a>;
    if(this.props.user !== null) {
      loginViewDesktop = <a>{this.props.user.email}</a>;
      loginViewMobile = <a>{this.props.user.email}</a>;
    }
		return (
			<div className="menu">
				<nav className="uk-navbar flex flex-center-x">
					<ul className="uk-navbar-nav uk-hidden-small uk-flex uk-flex-center uk-flex-middle navbar uk-hidden-small">
						<li>
							<a className="scroll-d uk-text-uppercase bcbk" href={this.props.redirect ? "/#index-section" : "#index-section"}>BCBK</a>
						</li>
						<li>
							<a className="scroll-d uk-text-uppercase" href={this.props.redirect ? "/#schedule-section" : "#schedule-section"}>Timetable</a>
						</li>
						<li>
							<a className="scroll-d uk-text-uppercase" href={this.props.redirect ? "/#location-section" : "#location-section"}>Location</a>
						</li>
						<li>
							<a className="scroll-d uk-text-uppercase" href={this.props.redirect ? "/#sponsors-section" : "#sponsors-section"}>Sponsors</a>
						</li>
						<li>
							<a className="uk-text-uppercase" href="/resend">Resend Email</a>
						</li>
						<li>
							<a className="uk-text-uppercase" href="/participants">Participants</a>
						</li>
						{/* <li>
							<a className="uk-text-uppercase" href="/sessions">Sessions</a>
						</li> */}
						{/* <li>
							<a className="uk-text-uppercase" href="/registration">Register</a>
						</li> */}
            {/* <li>
							{loginViewDesktop}
						</li> */}
					</ul>
					<a onClick={this.toggleMobileMenu} className="navbar-mobile uk-visible-small">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
				</nav>
        <div onClick={this.toggleMobileMenu} id="mobile-menu" className="mobile-menu mobile-menu-hide">
          <div className="uk-panel mobile-menu-panel">
            <li className="uk-margin-bottom uk-margin-top">
              <a className="scroll uk-text-uppercase bcbk" href={this.props.redirect ? "/#index-section" : "#index-section"}>bcbk</a>
            </li>
            <li className="menu-divider"></li>
            {/* <li>
              {loginViewMobile}
            </li> */}
            {/* <li>
              <a href="/registration">Register</a>
            </li> */}
            <li>
              <a className="scroll" href={this.props.redirect ? "/#schedule-section" : "#schedule-section"}>Timetable</a>
            </li>
            <li>
              <a className="scroll" href={this.props.redirect ? "/#location-section" : "#location-section"}>Location</a>
            </li>
            <li>
              <a className="scroll" href={this.props.redirect ? "/#sponsors-section" : "#sponsors-section"}>Sponsors</a>
            </li>
            <li>
              <a href="/resend">Resend Email</a>
            </li>
            <li>
              <a href="/participants">Participants</a>
            </li>
          {/* <li>
            <a href="/sessions">Sessions</a>
          </li> */}
          </div>
        </div>
        <LoginDesktop toggle={this.state.loginToggle} token={this.props.token} />
        <LoginMobile {...this.props} toggle={this.state.loginToggle} token={this.props.token} />
			</div>

		);
	}
}

export default Menus;
