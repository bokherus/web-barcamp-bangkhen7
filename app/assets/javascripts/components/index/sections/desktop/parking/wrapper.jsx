import PaidParking from '../../parking/paid-parking.jsx';
import FreeParking from '../../parking/free-parking.jsx';
import Transportation from '../../parking/transportation.jsx';
class Wrapper extends React.Component {
	render() {
		return (
			<div className="uk-hidden-small uk-width-1-1 uk-flex">
				<div className="uk-width-5-10">
					<div className="location-item">
						<h2 className="uk-text-uppercase">paid parking</h2>
						<PaidParking/>
					</div>
				</div>
				<div className="uk-width-5-10">
					<div className="location-item">
						<h2 className="uk-text-uppercase">free parking</h2>
						<FreeParking/>
						<div className="location-innerhead" id="location-transport">
							<h2 className="uk-text-uppercase">transportation</h2>
						</div>
						<Transportation/>
					</div>
				</div>
			</div>
		);
	}
}

export default Wrapper;
