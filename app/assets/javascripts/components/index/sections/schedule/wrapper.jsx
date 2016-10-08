import Desktop from './desktop/wrapper.jsx';
import Mobile from './mobile/wrapper.jsx';
import PageHeader from '../page-header.jsx';
class Section extends React.Component {
	render() {
		return (
			<div id="schedule-section">
				<div className="uk-width-8-10 uk-container-center">
					<PageHeader header="SCHEDULE">
						13 November 2016
					</PageHeader>
					<Desktop/>
					<Mobile/>
				</div>
			</div>
		);
	}
}

export default Section;
