import Desktop from './desktop/wrapper.jsx';
import Mobile from './mobile/wrapper.jsx';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers, bindActionCreators} from 'redux';
import reducer from './reducer';
import actions from './actions';
const store = createStore(reducer);

var mapStateToProps = function(state) {
  return { reducer: state };
};

var mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
};

class Wrapper extends React.Component {
	render() {
		var App = connect(mapStateToProps, mapDispatchToProps)(A);
		return (
			<Provider store={store}>
				<App {...this.props}/>
			</Provider>
		);
	}
}

class A extends React.Component {
  constructor(props) {
    super(props);
    this.props.init({ participants: this.props.participants });
    this.onFiltering = this.onFiltering.bind(this);
  }
  onFiltering() {
    var filter = this.refs['filter-form'].value;
    this.props.filtering(filter);
  }
	render() {
		return (
			<div id="participants">
				<div className="participants-banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
					<h1 className="uk-text-uppercase">participants</h1>
				</div>
				<div className="uk-width-1-1 body-wrapper">
					<div className="uk-width-8-10 uk-container-center">
						<input ref="filter-form" onChange={this.onFiltering} className="bb-input uk-width-1-1 uk-text-center uk-margin-top uk-margin-bottom" placeholder="Filter by interest"/>
						<Desktop />
            <Mobile />
					</div>
				</div>
			</div>
		);
	}
}

export default Wrapper;
