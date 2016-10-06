class Section extends React.Component {
	render() {
		console.log(this.props.logo);
		return (
			<div id="sponsors-section">
				<div className="uk-width-1-1 uk-flex uk-flex-center uk-flex-middle uk-flex-column">
					<h1>Sponsors</h1>
					<img style={{
						width: 250,
						height: 250
					}} className="img-responsive" src={this.props.logo}/>
					<h2>Department of Computer Engineering</h2>
					<div className="flex flex-center uk-grid uk-width-1-1">
						<div className="flex flex-center uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1">
							<img src={this.props.platinum1}/>
						</div>
						<div className="flex flex-center uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1">
							<img src={this.props.platinum2}/>
						</div>
					</div>
          <div className="flex flex-center uk-grid uk-width-1-1">
						<div className="flex flex-center uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1">
							<img src={this.props.platinum3}/>
						</div>
						<div className="flex flex-center uk-width-medium-1-4 uk-width-large-1-4 uk-width-small-1-1">
							<img src={this.props.platinum4}/>
						</div>
					</div>
					<div className="flex flex-center uk-grid uk-width-1-1">
            <div className="flex flex-center uk-width-small-1-2 uk-width-medium-1-5 uk-width-large-1-5">
              <img src={this.props.gold1}/>
            </div>
					</div>
          <div className="flex flex-center uk-grid uk-width-1-1">
            <div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-small-1-1">
              <img src={this.props.silver1}/>
            </div>
            <div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-small-1-1">
              <img src={this.props.silver2}/>
            </div>
            <div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-small-1-1">
              <img src={this.props.silver3}/>
            </div>
          </div>
          <div className="flex flex-center uk-grid uk-width-1-1">
            <div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-small-1-1">
              <img src={this.props.silver4}/>
            </div>
            <div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-small-1-1">
              <img src={this.props.silver5}/>
            </div>
            <div className="flex flex-center uk-width-medium-1-6 uk-width-large-1-6 uk-width-small-1-1">
              <img src={this.props.silver6}/>
            </div>
          </div>
				</div>
			</div>
		);
	}
}

export default Section;
