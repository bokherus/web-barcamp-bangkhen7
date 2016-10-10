import Menu from 'react-burger-menu';
var Slide = Menu.push;
class Menus extends React.Component {
  componentDidMount() {
    $('.scroll').click(function(event) {
      event.preventDefault();
      $('html,body').animate({
        scrollTop: $(this.hash).position().top
      }, 500);
      return false;
    });
  }
	render() {
		return (
			<div>
				<nav className="uk-navbar flex flex-center-x">
					<ul className="uk-navbar-nav uk-hidden-small uk-flex uk-flex-center uk-flex-middle navbar uk-hidden-small">
						<li>
							<a className="scroll uk-text-uppercase bcbk" href="#index-section">BCBK</a>
						</li>
						<li>
							<a className="scroll uk-text-uppercase" href="#register-section">Register</a>
						</li>
						<li>
							<a className="scroll uk-text-uppercase" href="#schedule-section">Schedule</a>
						</li>
						<li>
							<a className="scroll uk-text-uppercase" href="#location-section">Location</a>
						</li>
						<li>
							<a className="scroll uk-text-uppercase" href="#sponsors-section">Sponsors</a>
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
							<a className="uk-text-uppercase" href="/login">Login</a>
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
			</div>

		);
	}
}

export default Menus;
