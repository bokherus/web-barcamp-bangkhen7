import ParkingCard from './card.jsx';
import PaidParking from '../../parking/paid-parking.jsx';
import FreeParking from '../../parking/free-parking.jsx';
import Transportation from '../../parking/transportation.jsx';
class Wrapper extends React.Component {
  render() {
    return (
      <div className="uk-hidden-medium uk-hidden-large uk-width-1-1">
        <div className="uk-width-1-1">
          <ParkingCard cardName="free parking">
            <FreeParking />
          </ParkingCard>
        </div>
        <div className="uk-width-1-1 uk-margin-top">
          <ParkingCard cardName="paid parking">
            <PaidParking />
          </ParkingCard>
        </div>
        <div className="uk-width-1-1 uk-margin-top">
          <ParkingCard cardName="transportation">
            <Transportation />
          </ParkingCard>
        </div>
      </div>
    );
  }
}

export default Wrapper;
