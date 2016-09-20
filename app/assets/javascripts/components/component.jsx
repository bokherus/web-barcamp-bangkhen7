var Header = require('./header.jsx');
class HelloReacts extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<p>Hello React</p>
				<div className="uk-container">
					<button className="uk-button uk-button-success" type="button">Click</button>
					<div className="uk-panel uk-panel-box uk-width-medium-1-3">
						<div className="uk-panel-badge uk-badge uk-badge-danger">Hot</div>
						<h3 className="uk-panel-title">Title</h3>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</div>
				</div>

			</div>
		);
	}
}
module.exports = HelloReacts;
