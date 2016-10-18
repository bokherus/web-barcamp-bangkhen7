import PageHeader from './page-header.jsx';
import Mobile from './mobile/parking/wrapper.jsx';
import Desktop from './desktop/parking/wrapper.jsx';
class Section extends React.Component {
  componentDidMount() {
    var map = new GMaps({
      div: '#gmaps',
      lat: 13.846426,
      lng: 100.5692306
    });
    var locations = [
      {
        lat: 13.846387,
        lng: 100.569702,
        color: "#FFFFFF"
      },
      {
        lat: 13.842898,
        lng: 100.570699,
        label: "A"
      },
      {
        lat: 13.843533,
        lng: 100.569543,
        label: "B"
      },
      {
        lat: 13.851729,
        lng: 100.564527,
        label: "C"
      },
      {
        lat: 13.854054,
        lng: 100.570663,
        label: "D"
      },
      {
        lat: 13.846706,
        lng: 100.570685,
        label: "E"
      },
      {
        lat: 13.846030,
        lng: 100.567653,
        label: "F"
      },
      {
        lat: 13.849202,
        lng: 100.567631,
        label: "G"
      }
    ];
    for(var location in locations) {
      map.addMarker(locations[location]);
    }
  }
	render() {
		return (
			<div className="section flex" id="location-section">
				<div className="uk-width-8-10 uk-container-center">
					<PageHeader header="location">
						Building 17 (IUP)
            <br/>
            Faculty of Engineering
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
