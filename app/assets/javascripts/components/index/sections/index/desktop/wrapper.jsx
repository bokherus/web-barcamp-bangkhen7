class Desktop extends React.Component {
	render() {
		return (
			<div style={{
				paddingTop: 260,
				paddingBottom: 260
			}} className="uk-width-1-1 event-info uk-flex uk-flex-center">
				<div className="uk-width-1-1 uk-flex uk-flex-center uk-margin-bottom">
					<div className="uk-width-3-10 uk-flex uk-flex-center uk-flex-middle">
						<div className="uk-width-1-6">
							<img src={this.props.schedule}/>
						</div>
						<div className="uk-margin-left">
							<h3 className="no-margin">13 November 2016</h3>
							<h3 className="no-margin">9.00 AM - 5.00 PM</h3>
						</div>
					</div>
					<div className="uk-width-3-10 uk-flex uk-flex-center uk-flex-middle">
						<div className="uk-width-1-6">
							<img src={this.props.location}/>
						</div>
						<div className="uk-margin-left">
							<h3 className="no-margin">IUP Building (17)</h3>
							<h3 className="no-margin">Kasetsart University</h3>
						</div>
					</div>
					<div className="uk-width-3-10 uk-flex uk-flex-center uk-flex-middle">
						<div className="uk-width-1-6">
							<img src={this.props.twitter}/>
						</div>
						<div className="uk-margin-left">
							<h1 className="no-margin">#bcbk</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Desktop;
