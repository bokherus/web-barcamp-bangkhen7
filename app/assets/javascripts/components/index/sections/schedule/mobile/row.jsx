class Row extends React.Component {
	render() {
		return (
			<div className={"uk-width-1-1 uk-flex uk-flex-center " + (this.props['margin-top'] ? "uk-margin-top" : "")}>
				<div className="uk-width-4-10 uk-text-center">
					<h4>{this.props.time}</h4>
				</div>
				<div className="uk-width-2-10 schedule-circle"></div>
				<div className="uk-width-4-10" style={{paddingLeft: 10}}>
					<h4>{this.props.desc}</h4>
				</div>
			</div>
		);
	}
}

export default Row;
