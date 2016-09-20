import Section from './section.jsx';
import Menu from './menu.jsx';
class Wrapper extends React.Component {
	render() {
		return (
			<div id="outer-container">
				<Menu pageWrapId="page-wrap" outerContainerId="outer-container"/>
				<main id="page-wrap">
					<Section sectionId="section1" color="#bdc3c7" text="Section1"/>
					<Section sectionId="section2" color="#ecf0f1" text="Section2"/>
					<Section sectionId="section3" color="#bdc3c7" text="Section3"/>
				</main>
			</div>
		);
	}
}

export default Wrapper;
