import Desktop from './desktop/wrapper.jsx';
class Section extends React.Component {
	render() {
		return (
			<div className="uk-flex uk-flex-center uk-flex-column" id="index-section">
				<div style={{
					marginTop: 100
				}} className="uk-width-5-10 uk-width-medium-3-10 uk-width-large-3-10 uk-container-center logo-wrapper">
					<img src={this.props.logo}/>
				</div>
        <Desktop {...this.props}/>
			</div>
		);
	}
}

export default Section;
