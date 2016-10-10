import Desktop from './desktop/wrapper.jsx';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import reducer from './reducer';
const store = createStore(reducer);

class Wrapper extends React.Component {
	render() {
		var App = connect()(A);
		return (
			<Provider store={store}>
				<App {...this.props}/>
			</Provider>
		);
	}
}

class A extends React.Component {
	render() {
		return (
			<div id="participants">
				<div className="participants-banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
					<h1 className="uk-text-uppercase">participants</h1>
				</div>
				<div className="uk-width-1-1 body-wrapper">
					<div className="uk-width-8-10 uk-container-center">
						<input className="bb-input uk-width-1-1 uk-text-center uk-margin-top uk-margin-bottom" placeholder="Filter by interest"/>
						<Desktop {...this.props}/>
					</div>
				</div>
			</div>
		);
	}
}

export default Wrapper;
