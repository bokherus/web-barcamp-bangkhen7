import Row from './schedule-row.jsx';
class Desktop extends React.Component {
	render() {
		return (
			<div className="uk-hidden-small">
				<Row time="09.00 - 09.45" head="Registration and Setting up">
					<p className="no-margin thin">Participant register and get some BarCamp stuffs including BARCAMP SHIRT! Then move to 2md floor. Bring up your session on the vote board or vote any sessions you want to join</p>
				</Row>
				<Row time="09.45 - 10.30" head="Openning Ceremony">
					<p className="no-margin thin">Everybody will gather in the assembly hall(Room 17201, 2nd floor) to have a little introductory session.</p>
				</Row>
				<Row time="10.:40 - 12.05" head="Morning Sessions">
					<p>10.40 - 11.05 | 11.10 - 11.35 | 11.40 - 12.05</p>
					<p className="no-margin thin">Morning sessions are picked out and announced on the website and the schedule board on the 2nd floor.</p>
				</Row>
				<Row time="12.10 - 13.00" head="Lunch">
					<p className="no-margin thin">Let's have FREE lunch! You know an army marched on its stomach.</p>
				</Row>
				<Row time="13.00 - 14.55" head="Afternoon sessions">
					<p>13.00 - 13.25 | 13.30 - 13.55 | 14.00 - 14.25 | 14.30 - 14.55</p>
					<p className="no-margin thin">Afternoon sessions are picked out and announced on the website and the schedule board on the 2nd floor. Join and sessions as you wish.</p>
				</Row>
				<Row time="15.00 - 15.20" head="Break">
					<p className="no-margin thin">Dessert time!</p>
				</Row>
				<Row time="15.20 - 16.45" head="Back to Afternoon Sessions">
					<p>15.20 - 15.45 | 15.50 - 16.15 | 16.20 - 16.45</p>
					<p className="no-margin thin">More afternoon sessions are picked out. Check it on the website or the schedule board on the 2nd floor. Join any sessions as you wish.</p>
				</Row>
				<Row time="17.00 - 20.00" head="After Party">
					<p className="no-margin thin">A party at the end luntarily arranged by the staff to loosen up after a long day and have some fun!</p>
				</Row>
			</div>
		);
	}
}

export default Desktop;