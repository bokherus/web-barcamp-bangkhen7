class Wrapper extends React.Component {
	render() {
		return (
			<div id="login-section" style={{display: this.props.toggle ? "" : "none"}}>
				<form action="http://localhost:9999/user/signin" method="post" className="uk-width-8-10 uk-container-center">
					<div className="uk-width-1-1">
						<h5 className="no-margin uk-text-uppercase">Email</h5>
						<input className="bb-input uk-width-1-1" name="email" />
					</div>
          <div className="uk-width-1-1 uk-margin-top">
						<h5 className="no-margin uk-text-uppercase">Password</h5>
						<input className="bb-input uk-width-1-1" type="password" name="password"/>
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
