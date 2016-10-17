import Row from './row.jsx';
class Mobile extends React.Component {
	render() {
		return (
			<div className="uk-hidden-medium uk-hidden-large">
				<div className="uk-width-1-1 uk-flex uk-flex-center uk-flex-column schedule-line-parent">
					<div className="uk-width-1-1 uk-flex uk-flex-center schedule-line-1">
						<div className="schedule-line"></div>
					</div>
          <Row time="09.00 - 09.45" desc="Registration and Setting Up" />
          <Row margin-top time="09.45 - 10.30" desc="Opening Ceremony" />
          <Row margin-top time="10.40 - 12.05" desc="Morning Sessions" />
          <Row margin-top time="12.10 - 13.00" desc="Lunch" />
          <Row margin-top time="13.00 - 14.55" desc="Afternoon Sessions" />
          <Row margin-top time="15.00 - 15.20" desc="Break" />
          <Row margin-top time="15.20 - 16.45" desc="Back to Afternoon Sessions" />
          <Row margin-top time="16.45 - 20.00" desc="Diner" />
				</div>
			</div>
		);
	}
}

export default Mobile;
