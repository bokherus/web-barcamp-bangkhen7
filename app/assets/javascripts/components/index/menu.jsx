// import Menu from 'react-burger-menu';
var Menu = require('react-burger-menu');
var Slide = Menu.push;
class Menus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}
	__stateChanged(state) {
    this.setState({
      isOpen: state.isOpen
    });
		return state.isOpen;
	}
	__changeState() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Slide isOpen={this.state.isOpen} onStateChange={ this.__stateChanged.bind(this) } pageWrapId={this.props.pageWrapId} outerContainerId={this.props.outerContainerId}>
				<div className="menu-links-wrapper">
					<a onClick={this.__changeState.bind(this)} className="scroll" href="#section1">Section1</a>
					<a onClick={this.__changeState.bind(this)} className="scroll" href="#section2">Section2</a>
					<a onClick={this.__changeState.bind(this)} className="scroll" href="#section3">Section3</a>
				</div>
			</Slide>
		);
	}
}

module.exports = Menus;
