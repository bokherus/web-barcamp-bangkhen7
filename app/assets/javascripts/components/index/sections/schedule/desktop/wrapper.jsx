import Row from './schedule-row.jsx';
class Desktop extends React.Component {
	render() {
		return (
			<div className="uk-hidden-small">
				<Row time="09.00 AM - 09.45 AM" head="Registration">
					<h4 className="no-margin thin">Session votes</h4>
				</Row>
				<Row time="09.45 AM - 10.30 AM" head="Opening ceremony (Rm 17201)">
					{/* <h4 className="no-margin thin">Everybody will gather in the assembly hall(Room 17201, 2nd floor) to have a little introductory session.</h4> */}
				</Row>
				<Row time="10.40 AM - 12.05 PM" head="Morning Sessions">
					<h4 className="no-margin thin">Elected sessions will be announced on the website</h4>
				</Row>
				<Row time="12.10 PM - 01.00 PM" head="Lunch break">
					{/* <h4 className="no-margin thin">Let's have FREE lunch! You know an army marched on its stomach.</h4> */}
				</Row>
				<Row time="01.00 PM - 02.55 PM" head="Afternoon sessions">
					{/* <h4 className="no-margin">13.00 - 13.25 | 13.30 - 13.55 | 14.00 - 14.25 | 14.30 - 14.55</h4>
					<h4 className="no-margin thin">Afternoon sessions are picked out and announced on the website and the schedule board on the 2nd floor. Join and sessions as you wish.</h4> */}
				</Row>
				<Row time="03.00 PM - 03.20 PM" head="Afternoon break">
					{/* <h4 className="no-margin thin">Dessert time!</h4> */}
				</Row>
				<Row time="03.20 PM - 04.45 PM" head="Afternoon sessions (continued)">
					{/* <h4 className="no-margin">15.20 - 15.45 | 15.50 - 16.15 | 16.20 - 16.45</h4>
					<h4 className="no-margin thin">More afternoon sessions are picked out. Check it on the website or the schedule board on the 2nd floor. Join any sessions as you wish.</h4> */}
				</Row>
				<Row time="05.00 PM - 08.00 PM" head="After party">
					{/* <h4 className="no-margin thin">A party at the end luntarily arranged by the staff to loosen up after a long day and have some fun!</h4> */}
				</Row>
			</div>
		);
	}
}

export default Desktop;
