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
        <App />
			</Provider>
		);
	}
}

class A extends React.Component {
  render() {
    return (
      <div>
        <div className="participants-banner uk-width-1-1 uk-flex uk-flex-center uk-flex-middle">
          <h1 className="uk-text-uppercase">participants</h1>
        </div>
        <div className="uk-width-8-10 uk-container-center">
          <Desktop {...this.props}/>
        </div>
      </div>
    );
  }
}


export default Wrapper;
