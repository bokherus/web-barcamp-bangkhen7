import PageHeader from './page-header.jsx';
import Mobile from './mobile/parking/wrapper.jsx';
import Desktop from './desktop/parking/wrapper.jsx';
class Section extends React.Component {
	render() {
		return (
			<div className="section flex" id="location-section">
				<div className="uk-width-8-10 uk-container-center">
					<PageHeader header="location">
						IUP International Building 17
						<br/>
						Kasetsart University
					</PageHeader>
				</div>
				<div>
          <div id="gmaps"></div>
				</div>
				<div className="uk-width-8-10 uk-container-center uk-flex" id="location-body">
					<Mobile/>
					<Desktop/>
				</div>
			</div>
		);
	}
}

export default Section;
