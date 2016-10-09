class Desktop extends React.Component {
	render() {
		return (
			<div className="uk-width-1-1 event-info uk-flex uk-flex-center">
				<div className="event-info-wrapper uk-width-1-1 uk-flex uk-flex-center uk-margin-bottom">
					<div className="uk-width-medium-3-10 uk-width-large-3-10 uk-width-small-1-1 uk-flex uk-flex-center uk-flex-middle uk-margin-bottom uk-container-center">
						<div className="uk-width-1-6 uk-flex uk-flex-center">
							<img className="icon" src={this.props.schedule}/>
						</div>
						<div className="index-info-text uk-margin-left uk-width-3-10 uk-width-medium-5-6 uk-width-large-3-6">
							<h3 className="no-margin">13 November 2016</h3>
							<h3 className="no-margin">9.00 AM - 5.00 PM</h3>
						</div>
					</div>
					<div className="uk-width-medium-3-10 uk-width-large-3-10 uk-width-small-1-1 uk-flex uk-flex-center uk-flex-middle uk-margin-bottom uk-container-center">
						<div className="uk-width-1-6 uk-flex uk-flex-center">
							<img className="icon" src={this.props.location}/>
						</div>
						<div className="index-info-text uk-margin-left uk-width-3-10 uk-width-medium-5-6 uk-width-large-3-6">
							<h3 className="no-margin">IUP Building (17)</h3>
							<h3 className="no-margin">Kasetsart University</h3>
						</div>
					</div>
					<div className="uk-width-medium-3-10 uk-width-large-3-10 uk-width-small-1-1 uk-flex uk-flex-center uk-flex-middle uk-margin-bottom uk-container-center">
						<div className="uk-width-1-6 uk-flex uk-flex-center">
							<img className="icon" src={this.props.twitter}/>
						</div>
						<div className="index-info-text uk-margin-left uk-width-3-10 uk-width-medium-5-6 uk-width-large-3-6">
							<h1 className="no-margin">#bcbk</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Desktop;
