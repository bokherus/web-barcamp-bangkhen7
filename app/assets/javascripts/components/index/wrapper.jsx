import Index from './sections/index.jsx';
import Location from './sections/location.jsx';
import Register from './sections/register.jsx';
import Schedule from './sections/schedule.jsx';
import Sponsors from './sections/sponsors.jsx';
import Menu from './menu.jsx';
export default class Wrapper extends React.Component {
	render() {
		return (
			<div>
				<Menu />
				<div>
          <Index color="#bdc3c7"/>
          <Register color="#ecf0f1" />
          <Schedule color="#bdc3c7"/>
          <Location color="#ecf0f1"/>
          <Sponsors color="#bdc3c7"/>
				</div>
			</div>
		);
	}
}
